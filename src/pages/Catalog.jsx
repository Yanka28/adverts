import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAdverts } from '../redux/operations';
import CarsList from '../components/CarsList.jsx'
import Filter from 'components/Filter';

const Catalog=() =>{
  const dispatch = useDispatch();

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
