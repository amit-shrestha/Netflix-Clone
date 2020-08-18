import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  fetchMovies(url: string) {
    console.log('in service', url);
    return this.http.get(url);
  }
}
