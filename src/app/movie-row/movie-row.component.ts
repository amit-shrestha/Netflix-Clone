import { Component, OnInit, Input } from '@angular/core';

import { MovieService } from '../services/movie-service.service';
import APP_CONSTANTS from '../constants';

@Component({
  selector: 'app-movie-row',
  templateUrl: './movie-row.component.html',
  styleUrls: ['./movie-row.component.css'],
})
export class MovieRowComponent implements OnInit {
  @Input() title: string = '';
  @Input() fetchUrl: string = '';
  @Input() showPoster: boolean;

  movies: [] = [];

  appConstants: {} = APP_CONSTANTS;

  constructor(private movieServie: MovieService) {}

  ngOnInit(): void {
    console.log('showPoster==>', this.showPoster);
    this.movieServie.fetchMovies(this.fetchUrl).subscribe((response) => {
      this.movies = response['results'];
    });
  }
}
