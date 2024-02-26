import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';

import Card from './Card';
import { toast } from 'react-toastify';
import { fetchAdverts } from '../redux/operations';
import { selectAdverts} from '../redux/selectors';
import { CardsListStyle, ButtonOnload  } from '../components/CarsList.style'


const CarsList = () => {
  
  const dispatch = useDispatch();
  const { filteredList } = useSelector(selectAdverts);
  const [num, setNum] = useState(1)


  const handleLoadMoreClick = () => {
  if (num < 3) {
    setNum(num + 1);
    dispatch(fetchAdverts(num + 1));
   } else {
    toast({
      title: 'Im sorry, there are no more cars',
      status: 'warning',
      isClosable: true,
    });
    return;
  }
  };
  
  return (
    <>
  <CardsListStyle>
    {
     filteredList?.map((item) => (
       <Card key={item.id} item={item}/>
      ))}
  </CardsListStyle>
  <ButtonOnload onClick={handleLoadMoreClick}>Load more</ButtonOnload>
  </>
);
}
export default CarsList;