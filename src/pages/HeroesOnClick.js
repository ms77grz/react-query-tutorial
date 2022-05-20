import { useSuperHeroesData } from '../hooks/useSuperHeroesData';

const HeroesOnClick = () => {
  const { isLoading, data, isError, error, refetch } = useSuperHeroesData({
    enabled: false,
    select: data => data.data.map(hero => hero.alterEgo),
  });

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
      {data?.map(hero => (
        <div key={hero}>{hero}</div>
      ))}
    </>
  );
};
export default HeroesOnClick;
