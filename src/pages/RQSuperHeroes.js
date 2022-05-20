import { Link } from 'react-router-dom';
import { useSuperHeroesData } from '../hooks/useSuperHeroesData';

const RQSuperHeroes = () => {
  const onSuccess = data => {
    console.log('Perform side effect after data fetching', data);
  };

  const onError = error => {
    console.log('Perform side effect after encountering error', error);
  };

  const { isLoading, data, isError, error } = useSuperHeroesData({
    onSuccess,
    onError,
  });

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
        <div key={hero.id}>
          <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
        </div>
      ))}
    </>
  );
};
export default RQSuperHeroes;
