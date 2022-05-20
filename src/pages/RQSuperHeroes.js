import axios from 'axios';
import { useQuery } from 'react-query';

const fetchSuperHeroes = () => axios.get('http://localhost:4000/superheroes');

const RQSuperHeroes = () => {
  const { isLoading, data, isError, error } = useQuery('super-heroes', fetchSuperHeroes);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>RQ Super Heroes Page</h2>
      {data?.data.map(hero => (
        <div key={hero.id}>{hero.name}</div>
      ))}
    </>
  );
};
export default RQSuperHeroes;