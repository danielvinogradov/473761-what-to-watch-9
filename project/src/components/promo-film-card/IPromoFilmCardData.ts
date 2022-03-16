export interface IPromoFilmCardData {

  /**
   * Название фильма.
   */
  readonly title: string;

  /**
   * Жанр.
   */
  readonly genre: string;

  /**
   * Год выхода в прокат.
   */
  readonly year: number;

  /**
   * Изображение постера.
   */
  readonly posterImgSrc: string;
}
