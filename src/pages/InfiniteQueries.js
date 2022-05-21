import axios from 'axios';
import { Fragment } from 'react';
import { useInfiniteQuery } from 'react-query';

const fetchColors = ({ pageParam = 1 }) =>
  axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`);

const InfiniteQueries = ({ pageParam = 1 }) => {
  const {
    isLoading,
    data,
    isError,
    error,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery(['colors'], fetchColors, {
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < 4) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>InfiniteQueries</h2>
      {data?.pages.map((group, i) => (
        <Fragment key={i}>
          {group.data.map(color => (
            <div key={color.id}>
              {color.id}. {color.label}
            </div>
          ))}
        </Fragment>
      ))}
      <div>
        <button onClick={fetchNextPage} disabled={!hasNextPage}>
          load more
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
    </>
  );
};
export default InfiniteQueries;
