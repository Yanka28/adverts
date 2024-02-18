import React, { useState } from 'react';
import { ReactComponent as Heart } from "../icons/heartnormal-min.svg";
import styled from 'styled-components';
import { MakeYear, MakePrice, Cards, Img, Model, Description, Button } from '../components/CarsList.style'
import { cutWords } from '../helpers/cutWords.jsx'


const CardContainer = styled.div`

`;
 const StyledHeart = styled(Heart)`
  position: absolute;
  width: 32px; 
  margin-top: 14px;
  margin-right: 14px;
  z-index: 1;
`;
const Card = ({ item , addToFavorites}) => {
  const [clicked, setClicked] = useState(false);

  const handleHeartClick = () => {
    setClicked(!clicked);
    addToFavorites(item);
  };

  return (
    <CardContainer>
           <Cards key={item.id}>
       <Img src={item.img} alt="Car" width={274} height={268} />
          <StyledHeart  onClick={handleHeartClick}
        fill={clicked ? 'red' : 'transparent'}
       />
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
        </Cards>
    </CardContainer>
  );
};

export default Card;