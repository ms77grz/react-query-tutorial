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
          <Route path='*' element={<h2>Error 404!</h2>} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
};
export default App;
