import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {IPromoFilmCardData} from './components/promo-film-card/IPromoFilmCardData';

const mockPromoFilmCardData: IPromoFilmCardData = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014,
  posterImgSrc: 'img/the-grand-budapest-hotel-poster.jpg',
};

ReactDOM.render(
  <React.StrictMode>
    <App {...mockPromoFilmCardData}/>
  </React.StrictMode>,
  document.getElementById('root'));
