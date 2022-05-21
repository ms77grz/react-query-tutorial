import axios from 'axios';
import { useQuery } from 'react-query';

const fetchUserByEmail = ({ queryKey }) => {
  const email = queryKey[1];
  return axios.get(`http://localhost:4000/users/${email}`);
};

const fetchChannelById = ({ queryKey }) => {
  const id = queryKey[1];
  return axios.get(`http://localhost:4000/channels/${id}`);
};

const DependentQueries = ({ email }) => {
  const { isLoading, data: user } = useQuery(['user', email], fetchUserByEmail);
  const channelId = user?.data.channelId;

  const { data: channel } = useQuery(['channel', channelId], fetchChannelById, {
    enabled: !!channelId,
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h2>DependentQueries</h2>
      {channel?.data.courses.map(course => (
        <div key={course}>{course}</div>
      ))}
    </>
  );
};
export default DependentQueries;
