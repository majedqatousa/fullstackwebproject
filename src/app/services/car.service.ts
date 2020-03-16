import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CarService {

  private cars : Car[]; 

  constructor(private http:HttpClient) { 

  }
  
  addCars(car: Car): Observable<any>{
    return this.http.post('http://localhost:3000/cars',car);
   }
  getCarById(carId:number){
    return this.http.get('http://localhost:3000/cars/'+carId);
  }
  getCars():Observable<any>{
    return this.http.get('http://localhost:3000/cars');
  }
  deleteCars(carId:number){
    return this.http.delete('http://localhost:3000/cars/'+carId);

  }
  editCars(car:Car){
    return this.http.put(`http://localhost:3000/cars/${car.id}`,car);

  }
}
