import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {PromoFilmCardData} from './components/promo-film-card/PromoFilmCardData';

const mockPromoFilmCardData = new PromoFilmCardData(
  'The Grand Budapest Hotel',
  'Drama',
  2014,
  'img/the-grand-budapest-hotel-poster.jpg',
);

ReactDOM.render(
  <React.StrictMode>
    <App {...mockPromoFilmCardData}/>
  </React.StrictMode>,
  document.getElementById('root'));
