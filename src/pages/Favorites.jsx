import React from 'react';
import FavoritesList from '../components/FavoritesList.jsx'
import Filter from 'components/Filter';

const Favorites=() =>{

  return (
    <center>
      <h1>Favorites</h1>
       <Filter/>
      <FavoritesList />
    </center>);
}

export default Favorites;