import { Injectable } from '@angular/core';
import { Brand } from '../models/brand';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BrandService {

  private cars : Brand[]; 

  constructor(private http:HttpClient) { 

  }
  
  addBrands(brand: Brand): Observable<any>{
    return this.http.post('http://localhost:3000/brands',brand);
   }
  getBrandById(brandId:number){
    return this.http.get('http://localhost:3000/brands/'+brandId);
  }
  getBrands():Observable<any>{
    return this.http.get('http://localhost:3000/brands');
  }
  deleteBrands(brandId:number){
    return this.http.delete('http://localhost:3000/brands/'+brandId);

  }
  editBrands(brand:Brand){
    return this.http.put(`http://localhost:3000/brands/${brand.id}`,brand);

  }
}
