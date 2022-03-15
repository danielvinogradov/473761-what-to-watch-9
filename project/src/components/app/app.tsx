import HomePage from '../home-page/home-page';
import {IPromoFilmCardData} from '../promo-film-card/IPromoFilmCardData';

function App(promoFilmData: IPromoFilmCardData): JSX.Element {
  return <HomePage {...promoFilmData}/>;
}

export default App;
