import { useDispatch, useSelector } from 'react-redux';
import { selectAdverts} from '../redux/selectors';
import { MakeYear, MakePrice,CardsListStyle, Card, Img , Model,  Description ,Button } from '../components/CarsList.style'
import { cutWords} from '../helpers/cutWords.jsx'

const CarsList = () => {
const { list} =useSelector(selectAdverts)
const {filteredList} = useSelector(selectAdverts);

;

return (
  <CardsListStyle>
    {
      filteredList?.map((item) => (
      <Card key={item.id}>
        <Img src={item.img} alt="Car" width={274} height={268} />
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
);
}
export default CarsList;