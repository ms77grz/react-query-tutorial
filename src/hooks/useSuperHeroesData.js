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
// export const useAddSuperHeroData = () => {
//   const queryClient = useQueryClient();
//   return useMutation(addSuperHero, {
//     onSuccess: data =>
//       queryClient.setQueryData('super-heroes', oldQueryData => ({
//         ...oldQueryData,
//         data: [...oldQueryData.data, data.data],
//       })),
//   });
// };

// optimistic updates approach
export const useAddSuperHeroData = () => {
  const queryClient = useQueryClient();
  return useMutation(addSuperHero, {
    onMutate: async newHero => {
      await queryClient.cancelQueries('super-heroes');
      const previousHeroData = queryClient.getQueryData('super-heroes');
      queryClient.setQueryData('super-heroes', oldQueryData => ({
        ...oldQueryData,
        data: [
          ...oldQueryData.data,
          { id: oldQueryData?.data?.length + 1, ...newHero },
        ],
      }));
      return {
        previousHeroData,
      };
    },
    onError: (_error, _hero, context) =>
      queryClient.setQueryData('super-heroes', context),
    onSettled: () => queryClient.invalidateQueries('super-heroes'),
  });
};
