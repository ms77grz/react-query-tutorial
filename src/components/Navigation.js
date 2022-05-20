import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/super-heroes'>Super Heroes</NavLink>
        </li>
        <li>
          <NavLink to='/rq-super-heroes'>RQ Super Heroes</NavLink>
        </li>
        <li>
          <NavLink to='/heroes-on-click'>Heroes On Click</NavLink>
        </li>
        <li>
          <NavLink to='/parallel-queries'>Parallel Queries</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
