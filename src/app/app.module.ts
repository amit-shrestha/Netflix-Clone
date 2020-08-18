import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieRowComponent } from './movie-row/movie-row.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [AppComponent, MovieRowComponent, HomeComponent, BannerComponent, NavComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
