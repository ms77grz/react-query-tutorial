import axios from 'axios';
import { useQuery, useMutation, useQueryClient } from 'react-query';

const fetchSuperHeroes = () => axios.get('http://localhost:4000/superheroes');

const addSuperHero = hero =>
  axios.post('http://localhost:4000/superheroes', hero);

export const useSuperHeroesData = params =>
  useQuery('super-heroes', fetchSuperHeroes, params);

// query invalidation approach
// export const useAddSuperHeroData = () => {
//   const queryClient = useQueryClient();
//   return useMutation(addSuperHero, {
//     onSuccess: () => queryClient.invalidateQueries('super-heroes'),
//   });
// };

// handling mutation response approach
export const useAddSuperHeroData = () => {
  const queryClient = useQueryClient();
  return useMutation(addSuperHero, {
    onSuccess: data =>
      queryClient.setQueryData('super-heroes', oldQueryData => ({
        ...oldQueryData,
        data: [...oldQueryData.data, data.data],
      })),
  });
};
