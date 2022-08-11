import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Imports components from internal dependencies
import { WeatherComponent } from './Dashboard/weather/weather.component';

const routes: Routes = [
  { path: '', redirectTo: 'weather', pathMatch: 'full' },
  { path: 'weather', component: WeatherComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
