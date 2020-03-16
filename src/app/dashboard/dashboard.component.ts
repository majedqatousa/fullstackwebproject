import { Component, OnInit } from '@angular/core';
import {trigger,state,style,animate,transition,keyframes,query,stagger, animation}from '@angular/animations';
import { Car } from '../models/car';
import { CarService } from '../services/car.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('photosAnimation', [
      transition('* => *', [
        query('img',style({ transform: 'translateX(-100%)'})),
        query('img',
          stagger('600ms', [
            animate('900ms', style({ transform: 'translateX(0)'}))
        ]))
      ])
    ])
  ]
})
export class DashboardComponent implements OnInit {
  cars : Car[];
  carPhotos:any[]=[
    {id:1,name:"BMW",url:'assets/img/bmw.png'},
    {id:2,name:"VM",url:'assets/img/vm.png'},
    {id:3,name:"SKODA",url:'assets/img/audi.png'},
    {id:3,name:"SKODA",url:'assets/img/skoda.png'},
    {id:3,name:"SKODA",url:'assets/img/mercides.png'}
  ];
  photos:any[]=[
    {id:1,name:"BMW",url:'assets/img/bmw.png'},
    {id:2,name:"VM",url:'assets/img/vm.png'},
    {id:3,name:"SKODA",url:'assets/img/audi.png'},
    {id:3,name:"SKODA",url:'assets/img/skoda.png'},
    {id:3,name:"SKODA",url:'assets/img/mercides.png'}
    
  ];

  constructor(private carService:CarService) { }

  ngOnInit() {
    this.getCars();
  }
  getCars(){
    this.carService.getCars().subscribe((cars: Car[]) => {
      this.cars = cars;
    });

  }
}
