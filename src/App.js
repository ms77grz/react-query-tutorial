import './App.css';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import RQSuperHeroes from './pages/RQSuperHeroes';
import SuperHeroes from './pages/SuperHeroes';
import HeroesOnClick from './pages/HeroesOnClick';
import RQSuperHeroe from './pages/RQSuperHeroe';
import ParallelQueries from './pages/ParallelQueries';
import DynamicParallelQueries from './pages/DynamicParallelQueries';
import DependentQueries from './pages/DependentQueries';
import PaginatedQueries from './pages/PaginatedQueries';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='super-heroes' element={<SuperHeroes />} />
          <Route path='rq-super-heroes' element={<RQSuperHeroes />} />
          <Route path='rq-super-heroes/:heroId' element={<RQSuperHeroe />} />
          <Route path='heroes-on-click' element={<HeroesOnClick />} />
          <Route path='parallel-queries' element={<ParallelQueries />} />
          <Route
            path='dependent-queries'
            element={<DependentQueries email='alex@example.com' />}
          />
          <Route
            path='dynamic-parallel-queries'
            element={<DynamicParallelQueries heroIds={[1, 3]} />}
          />
          <Route path='paginated-queries' element={<PaginatedQueries />} />
          <Route path='*' element={<h2>Error 404!</h2>} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
};
export default App;
