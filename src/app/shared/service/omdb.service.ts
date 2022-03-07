import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie, Omdb } from '../model/omdb.model';

const API_URL = "http://www.omdbapi.com/";
const API_KEY = "19c286fa";

@Injectable({
   providedIn: 'root'
})
export class OmdbService {

   constructor(private http: HttpClient) { }

   public getMovies(name: string, type: string, page: number): Observable<any> {
      return this.http.get<Omdb>(`${API_URL}?apikey=${API_KEY}&s=${name}&t=${type}&page=${page}`);
   }

   public getMovieById(id: string): Observable<Movie> {
      return this.http.get<Movie>(`${API_URL}?apikey=${API_KEY}&i=${id}`);
   }

}
