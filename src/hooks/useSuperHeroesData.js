import axios from 'axios';
import { useQuery, useMutation } from 'react-query';

const fetchSuperHeroes = () => axios.get('http://localhost:4000/superheroes');

const addSuperHero = hero =>
  axios.post('http://localhost:4000/superheroes', hero);

export const useSuperHeroesData = params =>
  useQuery('super-heroes', fetchSuperHeroes, params);

export const useAddSuperHeroData = () => useMutation(addSuperHero);
