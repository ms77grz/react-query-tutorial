import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  useSuperHeroesData,
  useAddSuperHeroData,
} from '../hooks/useSuperHeroesData';

const RQSuperHeroes = () => {
  const [name, setName] = useState('');
  const [alterEgo, setAlterEgo] = useState('');

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

  const { mutate: addHero } = useAddSuperHeroData();

  const handleAddHeroClick = () => {
    if (!name || alterEgo) {
      alert('empty values');
      return;
    }
    addHero({ name, alterEgo });
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>RQ Super Heroes Page</h2>
      <div>
        <input
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type='text'
          value={alterEgo}
          onChange={e => setAlterEgo(e.target.value)}
        />
        <button onClick={handleAddHeroClick}>Add Hero</button>
      </div>
      {data?.data.map(hero => (
        <div key={hero.id}>
          <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
        </div>
      ))}
    </>
  );
};
export default RQSuperHeroes;
