import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAdverts } from '../redux/operations';
// import { selectLoading, selectError } from '../redux/selectors';
import CarsList from '../components/CarsList.jsx'
import Filter from 'components/Filter';

const Catalog=() =>{
  const dispatch = useDispatch();
   const [num, setNum] = useState(1)
  // const isLoading = useSelector(selectLoading);
  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchAdverts(1));
  }, [dispatch])

  return (
    <>
      <Filter/>
      <CarsList />
    </>);
}




export default Catalog;
