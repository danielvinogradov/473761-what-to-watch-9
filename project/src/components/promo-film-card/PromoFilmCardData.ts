class PromoFilmCardData {

  /**
   * Название фильма.
   */
  public readonly title: string;

  /**
   * Жанр.
   */
  public readonly genre: string;

  /**
   * Год выхода в прокат.
   */
  public readonly year: number;

  /**
   * Изображение постера.
   */
  public readonly posterImgSrc: string;

  constructor(title: string, genre: string, year: number, posterImgSrc: string) {
    this.title = title;
    this.genre = genre;
    this.year = year;
    this.posterImgSrc = posterImgSrc;
  }
}

export {PromoFilmCardData};
