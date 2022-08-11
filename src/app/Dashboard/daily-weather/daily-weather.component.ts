import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-daily-weather',
  templateUrl: './daily-weather.component.html',
  styleUrls: ['./daily-weather.component.css']
})
export class DailyWeatherComponent implements OnInit {
  public weatherData: any = [];
  public dayWeather: any = [];
  // public hourWeather: any = [];
  public iconImg: any;
  public weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getData().subscribe((res) => {
      this.weatherData = res;
      var iconImg = this.weatherData.current.condition.icon;
      console.log("check icon", iconImg);
      console.log("weather", this.weatherData.current);
      // this.weatherData.current?.date.getDay()
      let currentDay= this.weatherData.forecast.forecastday[0].date;
      var dt = new Date(currentDay);
      let day = this.weekday[dt.getDay()];


      this.weatherData.forecast.forecastday.forEach((a:any) => {
        console.log("day", a);
        this.dayWeather.push(a); 
      })
    })
  }

}
