/**
 * Данные о фильме для карточки превью.
 */
export interface IFilmCardData {

  /**
   * Путь к изображению превью.
   */
  readonly coverImgSrc: string;

  /**
   * Название фильма. Будет также использовано в атрибуте alt.
   */
  readonly title: string;
}
