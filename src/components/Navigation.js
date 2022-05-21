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
        <li>
          <NavLink to='/dynamic-parallel-queries'>
            Dynamic Parallel Queries
          </NavLink>
        </li>
        <li>
          <NavLink to='/dependent-queries'>Dependent Queries</NavLink>
        </li>
        <li>
          <NavLink to='/paginated-queries'>Paginated Queries</NavLink>
        </li>
        <li>
          <NavLink to='/infinite-queries'>Infinite Queries</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
