import { Component, OnInit } from '@angular/core';

import requests from '../requests';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  requests: {} = requests;

  constructor() {}

  ngOnInit(): void {}
}
