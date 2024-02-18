import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { useToast } from '@chakra-ui/react';
import styled from 'styled-components';
import { ReactComponent as Heart } from "../icons/heartnormal-min.svg";
import { toast } from 'react-toastify';
import { fetchAdverts } from '../redux/operations';
import { selectAdverts} from '../redux/selectors';
import { MakeYear, MakePrice,CardsListStyle, Card, Img , Model,  Description ,Button, ButtonOnload  } from '../components/CarsList.style'
import { cutWords} from '../helpers/cutWords.jsx'

const CarsList = () => {
  // const toast = useToast({ position: 'top' });
  
  const dispatch = useDispatch();
  const { list} =useSelector(selectAdverts)
  const { filteredList } = useSelector(selectAdverts);
  const [num, setNum] = useState(1)
   const [clicked, setClicked] = useState(false);

  const StyledHeart = styled(Heart)`
  position: absolute;
  /* fill: rgb(255, 0, 51);  */
  width: 32px; 
  margin-top: 14px;
  margin-right: 14px;
  z-index: 1;
  /* fill: ${props => props.clicked ? 'blue' : 'transparent'}; */
`;
const handleIconClick = () => {
  setClicked(!clicked);
};

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


return (<>
  <CardsListStyle>
    {
     filteredList?.map((item) => (
      <Card key={item.id}>
         <Img src={item.img} alt="Car" width={274} height={268} />
              <StyledHeart  onClick={handleIconClick} clicked={clicked} fill={clicked ? 'red' : 'transparent'}/>
        <MakePrice>
        <MakeYear>
        <p>{item.make} </p>
        <Model>{item.model} </Model>
        <p>{item.year}</p>
        </MakeYear>
          <p>{item.rentalPrice}</p>
        </MakePrice>
        <Description>
        <p>{cutWords(item.address)}</p>
        <p>{item.rentalCompany}</p>
        {/* <p>Premium</p> */}
        <p>{item.type}</p>
        <p>{ item.model}</p>
        <p>{item.id}</p>
           <p>{item.functionalities[0]}</p>
         </Description>
        <Button>Learn more</Button>
      </Card>
      ))}
    
  </CardsListStyle>
  <ButtonOnload onClick={handleLoadMoreClick}>Load more</ButtonOnload>
  </>
);
}
export default CarsList;