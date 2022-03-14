/**
 * Данные о фильме для карточки превью.
 */
class FilmCardData {

  /**
   * Путь к изображению превью.
   */
  public readonly coverImgSrc: string;

  /**
   * Название фильма. Будет также использовано в атрибуте alt.
   */
  public readonly title: string;

  /**
   * На будущее
   */
  // public readonly href: string;

  constructor(coverImgSrc: string, title: string) {
    this.coverImgSrc = coverImgSrc;
    this.title = title;
  }
}

export {FilmCardData};
