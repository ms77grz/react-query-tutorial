import axios from 'axios';
import { useQueries } from 'react-query';

const fetchSuperHero = ({ queryKey }) => {
  const heroId = queryKey[1];
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

const DynamicParallelQueries = ({ heroIds }) => {
  const queryResults = useQueries(
    heroIds.map(heroId => ({
      queryKey: ['super-hero', heroId],
      queryFn: fetchSuperHero,
    }))
  );

  console.log({ queryResults });

  return <div>DynamicParallelQueries</div>;
};
export default DynamicParallelQueries;
