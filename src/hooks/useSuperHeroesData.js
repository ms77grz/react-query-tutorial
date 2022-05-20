import axios from 'axios';
import { useQuery } from 'react-query';

const fetchSuperHeroes = () => axios.get('http://localhost:4000/superheroes');

export const useSuperHeroesData = params => {
  return useQuery('super-heroes', fetchSuperHeroes, params);
};
