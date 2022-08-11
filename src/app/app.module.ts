// Imports Modules from npm dependencies
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// Imports Components from internal dependencies
import { WeatherComponent } from './Dashboard/weather/weather.component';
import { DailyWeatherComponent } from './Dashboard/daily-weather/daily-weather.component';
import { WeeklyWeatherComponent } from './Dashboard/weekly-weather/weekly-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    DailyWeatherComponent,
    WeeklyWeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
