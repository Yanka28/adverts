import  Card  from './Card';
import { selectAdverts} from '../redux/selectors';
import { CardsListStyle, ButtonOnload } from '../components/CarsList.style'
import { useDispatch, useSelector } from 'react-redux';


const FavoritesList = () => { 
    const { favoritesList } = useSelector(selectAdverts);
    console.log(favoritesList, 'favoritesList');
    return (
        <>
        <CardsListStyle>
    {
     favoritesList?.map((item) => (
       <Card key={item.id} item={item}/>
      ))}
            </CardsListStyle>
            {/* <ButtonOnload onClick={handleLoadMoreClick}>Load more</ButtonOnload> */}
        </>
)
}
export default FavoritesList;