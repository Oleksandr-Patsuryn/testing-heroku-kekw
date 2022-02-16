import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

interface Cars {
  name: string,
  color: string,
  id: number
}

@Injectable()
export class CarsService {
  constructor(private http: HttpClient) {}

  getCars(){
    return this.http.get<Cars>('https://testing-heroku-kekw.herokuapp.com/cars');
  }
}
