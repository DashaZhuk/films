export interface Omdb {
   Response: string,
   Search: MoviePreview[],
   totalResults: string,
   Error: string,
}

export interface MoviePreview {
   Poster: string,
   Title: string,
   Type: string,
   Year: string,
   imdbID: string
}

export interface FilmInformation {
   Title: string,
   Released: string,
   Genre: string,
   Country: string,
   Director: string,
   Writer: string,
   Actor: string,
}

export interface Movie {
   Actors: string,
   Awards: string,
   BoxOffice: string,
   Country: string,
   DVD: string,
   Director: string,
   Genre: string,
   Language: string,
   Metascore: string,
   Plot: string,
   Poster: string,
   Production: string,
   Rated: string,
   Ratings: Rating[],
   Released: string,
   Response: string,
   Runtime: string,
   Title: string,
   Type: string,
   Website: string,
   Writer: string,
   Year: string,
   imdbID: string,
   imdbRating: string,
   imdbVotes: string,
}

export interface Rating {
   Source: string,
   Value: string
}