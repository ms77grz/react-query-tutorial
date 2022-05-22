// import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';
import { request } from '../utils/axios-utils';

const fetchSuperHero = ({ queryKey }) => {
  const heroId = queryKey[1];
  return request({ url: `http://localhost:4000/superheroes/${heroId}` });
};

// export const useSuperHeroeData = heroId => {
//   return useQuery(['super-hero', heroId], fetchSuperHero);
// };

// initial query data
export const useSuperHeroeData = heroId => {
  const queryClient = useQueryClient();
  return useQuery(['super-hero', heroId], fetchSuperHero, {
    initialData: () => {
      const hero = queryClient
        .getQueryData('super-heroes')
        ?.data?.find(hero => hero.id === parseInt(heroId));
      if (hero) {
        return {
          data: hero,
        };
      } else {
        return undefined;
      }
    },
  });
};
