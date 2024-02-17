import React from 'react';
import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { useDispatch } from 'react-redux';
import { fetchAdverts } from './redux/operations.jsx';

const Catalog = lazy(() => import('./pages/Catalog.jsx'))

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
        <Route index element={ <Catalog/>} />
        {/* <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage/> } />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        /> */}
      </Route>
    </Routes>
  ));
};
export default App;