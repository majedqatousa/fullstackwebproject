import { Engine } from './engine';
import { Brand } from './brand';

export class Car {
    id : number;
    brand:string; 
    model:string;
    year:number;
    price:number;
    km:number;
    url:string;
    engine:Engine;

    Car(){
        this.id=null;
        this.brand=null;
        this.model=null;
        this.year=null;
        this.price=null;
        this.km=null;
        this.engine = new Engine();
    }
}
