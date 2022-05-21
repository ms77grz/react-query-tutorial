import axios from 'axios';
import { useState } from 'react';
import { useQuery } from 'react-query';

const fetchColors = ({ queryKey }) => {
  const pageNumber = queryKey[1];
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`);
};

const PaginatedQueries = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { isLoading, data, isError, error, isFetching } = useQuery(
    ['colors', pageNumber],
    fetchColors,
    { keepPreviousData: true }
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>PaginatedQueries</h2>
      {data?.data.map(color => (
        <div key={color.id}>
          {color.id}. {color.label}
        </div>
      ))}
      <div>
        <button
          disabled={pageNumber === 1}
          onClick={() => setPageNumber(state => state - 1)}
        >
          prev
        </button>
        <button
          disabled={pageNumber === 4}
          onClick={() => setPageNumber(state => state + 1)}
        >
          prev
        </button>
      </div>
      {isFetching && 'Loading'}
    </>
  );
};
export default PaginatedQueries;
