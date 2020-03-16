import { Component, OnInit, Output, OnChanges, EventEmitter, Input, SimpleChanges } from '@angular/core';
import { Car } from '../models/car';
import { CarService } from '../services/car.service';
import { Engine } from '../models/engine';
import { isNullOrUndefined } from 'util';
import { Brand } from '../models/brand';
import { BrandService } from '../services/brand.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {
  @Output() update: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() selectedCar: Car;

  brands:Brand[];

  car: Car = new Car();
  
  selectedBrand:Brand ; 

  constructor(private carService: CarService,private brandService :BrandService) { 
    this.selectedBrand=new Brand();
  }

  ngOnInit() {

    this.getBrands();

    this.car.engine = new Engine();
    this.car.engine.fuel = null;
    this.car.engine.consumption = 0;
    this.car.engine.pwoer = 0;

  }
  getBrands(){
    this.brandService.getBrands().subscribe((brands: Brand[]) => {
      this.brands = brands;
    });
  }
  deleteBrand(brandId:number){
    this.brandService.deleteBrands(brandId)
    .subscribe((car:Car)=>{
      this.getBrands();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.car = this.selectedCar;
    console.log(this.car);
  }

  isAddAction(carId): boolean {
    return isNullOrUndefined(carId) || carId === 0;
  }

  debug(form): void {
    console.log(form);
  }


  processForm(car: Car): void {
    // add a new car 
    if(this.car.brand=="Skoda"){
      this.car.url="assets/img/skoda.png";
    }

    if (this.isAddAction(car.id)) {
      //post 
      this.carService.addCars(car).subscribe((car: Car) => {
        this.update.emit(true);
      },
        error => {
          console.log(error);
          alert('cant reseve cars');
        }
      );
    }
    else {
      //edit
      this.carService.editCars(car).subscribe((car: Car) => {
        this.update.emit(true);
      });
    }
  }
  processForm2(brand : Brand):void{
    //add a new brand 

      this.brandService.addBrands(brand).subscribe((brand: Brand) => {
        this.update.emit(true);
        alert('Brand added successfuly ');
      },
        error => {
          console.log(error);
          alert('cant reseve brand');
        }
      );
    }



}
