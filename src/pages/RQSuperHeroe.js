import { Link, useParams } from 'react-router-dom';
import { useSuperHeroeData } from '../hooks/useSuperHeroeData';

const RQSuperHeroe = () => {
  const { heroId } = useParams();
  const { isLoading, data, isError, error } = useSuperHeroeData(heroId);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      <h2>{data?.data.name}</h2>
      <p>{data?.data.alterEgo}</p>
      <Link to='/rq-super-heroes'>back to super heroes</Link>
    </div>
  );
};
export default RQSuperHeroe;
