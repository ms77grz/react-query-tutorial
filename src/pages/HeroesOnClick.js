import axios from 'axios';
import { useQuery } from 'react-query';

const fetchSuperHeroes = () => axios.get('http://localhost:4000/superheroes');

const HeroesOnClick = () => {
  const { isLoading, data, isError, error, refetch } = useQuery(
    'super-heroes-btn',
    fetchSuperHeroes,
    {
      enabled: false,
      select: data => data.data.map(hero => hero.alterEgo),
    }
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>Fetch Heroes On Click</h2>
      <button onClick={refetch}>fetch heroes</button>
      {data?.map((hero, i) => (
        <div key={i}>{hero}</div>
      ))}
    </>
  );
};
export default HeroesOnClick;
