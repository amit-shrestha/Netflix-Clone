import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit, OnDestroy {
  isBackgroundTransparent: Boolean = true;

  constructor() {}

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) this.isBackgroundTransparent = false;
      else this.isBackgroundTransparent = true;
    });
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', () => {});
  }
}
