import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  /**
   * @description Used to get all the items from the database through the api ( String )
   *
   * @return productList items ( String )
   * */
  getData() {
    return this.http.get<any>('https://api.weatherapi.com/v1/forecast.json?key=0b81c00069be4d3fa7262132220408&q=hyderabad&days=7&aqi=no&alerts=no').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
