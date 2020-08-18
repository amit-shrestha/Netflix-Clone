import { Component, OnInit } from '@angular/core';

import { MovieService } from '../services/movie-service.service';
import requests from '../requests';
import APP_CONSTANTS from '../constants';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  requests: {} = requests;
  appConstants: {} = APP_CONSTANTS;
  movie: {};

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService
      .fetchMovies(this.requests['fetchNetflixOriginals'])
      .subscribe((response) => {
        this.movie = response['results'][0];
      });
  }

  truncateString(str: string, n: number) {
    return str && str.length > n ? str.substr(0, n - 1) + '...' : str;
  }
}
