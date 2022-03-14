import HomePage from '../home-page/home-page';
import {PromoFilmCardData} from '../promo-film-card/PromoFilmCardData';

function App(promoFilmData: PromoFilmCardData): JSX.Element {
  return <HomePage {...promoFilmData}/>;
}

export default App;
