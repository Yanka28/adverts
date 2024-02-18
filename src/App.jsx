import React from 'react';
import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { useDispatch } from 'react-redux';
import { fetchAdverts } from './redux/operations.jsx';
import { RestrictedRoute } from './RestrictedRoute';

const Catalog = lazy(() => import('./pages/Catalog.jsx'))
const HomePage = lazy(() => import('./pages/Home.jsx'));
const Favorites = lazy(() => import('./pages/Favorites.jsx'))

function  App() {
  const dispatch = useDispatch();
  
    useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch])

  // return (
  //   <Catalog/>
  // );
  return (
  
    (<Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={ <HomePage/>} />
        <Route
          path="/catalog" element={<Catalog/>}
        />
         <Route
          path="/favorites" element={<Favorites/>}
        />
        </Route>
    </Routes>
  ));
};
export default App;