import {Component} from '@angular/core';
import {CarsService} from "./cars.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'testing-heroku';

  constructor(private carsService: CarsService) {}

  loadCars() {
    this.carsService.getCars().subscribe((cars) => {
        console.log(cars);
      }
    )
  }
  loadCars2() {
    this.carsService.getCars2().subscribe((cars) => {
        console.log(cars);
      }
    )
  }

}
