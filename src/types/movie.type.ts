export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: string[];

  id: number;

  original_language: string;
  original_title: string;
  overview: string;
  popularity: string;
  poster_path: string;
  release_date: string;

  title: string;
  video: boolean;
  vote_average: string;
  vote_count: number;
}

export interface MoviesPayload {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export interface BigMoive extends IMovie {
  budget: number;
  genres: { id: number; name: string }[];
  homepage: string;
  imdb_id: number;
  production_companies: {
    id: number;
    logo_path?: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: { iso_3166_1: string; name: string }[];
  revenue: number;
  runtime: number;
  spoken_languages: { english_name: string; iso_639_1: string; name: string }[];
  status: string;
  tagline: string;
}
