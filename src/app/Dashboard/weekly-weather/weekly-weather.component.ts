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
     * used to get the Data from the api by using services
     *
     * @params {Object}
     * @returns {Object}
     */
    this.weatherService.getData().subscribe((res) => {
      this.weatherData = res;
      // this.weatherData.forecast = res;
      console.log("checking", this.weatherData.forecast);
      var weeklyWeather = this.weatherData.forecast;
      // let currentDay= this.weatherData.forecast.forecastday[0].date;
      // var dt = new Date(currentDay);
      // let day = this.weekday[dt.getDay()];
      // console.log("check day", dt.getDay(), day);


      // To get the forecastday hourlywise data 
      this.weatherData.forecast.forecastday.forEach((a:any) => {
        this.hourlyWeather = a.hour; 
        let currentDay= a.hour.date;
        var dt = new Date(currentDay);
        this.hourlyWeather.forEach((b:any) =>{
          this.hourWeather.push(b)
          let day = this.weekday[dt.getDay()];
        })
      });
    });
  }
  
  
  

}
