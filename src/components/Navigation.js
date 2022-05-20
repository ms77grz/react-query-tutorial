import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/super-heroes'>Super Heroes</Link>
        </li>
        <li>
          <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
