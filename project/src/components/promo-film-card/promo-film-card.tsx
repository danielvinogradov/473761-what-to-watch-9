/**
 * Промо-фильм в шапке страницы.
 */

type PromoFilmCardProps = {
  /**
   * Название.
   */
  title: string;

  /**
   * Жанр.
   *
   * todo: enum?
   */
  genre: string;

  /**
   * Год выхода.
   */
  year: number;

  /**
   * Путь к картинке обложки.
   */
  posterImgSrc: string;
};

function PromoFilmCard({title, genre, year, posterImgSrc}: PromoFilmCardProps) {
  return (
    <div className="film-card__wrap">
      <div className="film-card__info">
        <div className="film-card__poster">
          <img
            src={posterImgSrc}
            alt={`${title} poster`}
            width="218"
            height="327"
          />
        </div>

        <div className="film-card__desc">
          <h2 className="film-card__title">{title}</h2>
          <p className="film-card__meta">
            <span className="film-card__genre">{genre}</span>
            <span className="film-card__year">{year}</span>
          </p>

          <div className="film-card__buttons">
            <button className="btn btn--play film-card__button" type="button">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <button className="btn btn--list film-card__button" type="button">
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref="#add"></use>
              </svg>
              <span>My list</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PromoFilmCard;
