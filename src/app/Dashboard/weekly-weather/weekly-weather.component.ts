import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weekly-weather',
  templateUrl: './weekly-weather.component.html',
  styleUrls: ['./weekly-weather.component.css']
})
export class WeeklyWeatherComponent implements OnInit {
  // Declaring the Variables with assigned a strict type
  public weatherData: any = [];
  public hourlyWeather: any = [];
  public hourWeather: any = [];

  // public grandTotal!: number;
  public weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  constructor(private router: Router, private weatherService: WeatherService) { }

  ngOnInit(): void {
    /**
     * used to get the products from the api and categorize the products by using services
     *
     * @params {Object}
     * @returns {Object}
     */
    this.weatherService.getData().subscribe((res) => {
      this.weatherData = res;
      // this.weatherData.forecast = res;
      console.log("checking", this.weatherData.forecast);
      var weeklyWeather = this.weatherData.forecast;
      let currentDay= this.weatherData.forecast.forecastday[0].date;
      var dt = new Date(currentDay);
      let day = this.weekday[dt.getDay()];
      // console.log("check day", dt.getDay(), day);
      // this.grandTotal = this.weatherService.getTotalPrice();


      // const dailyWeatherData()={

      // }
      this.weatherData.forecast.forecastday.forEach((a:any) => {
        // console.log("day", a.hour);
        this.hourlyWeather = a.hour; 
        this.hourlyWeather.forEach((b:any) =>{
          this.hourWeather = b.hour; 
          console.log("checking hour base", b);
          return b;
        })
      });
    });
  }
  
  
  

}
