export class Engine {
    fuel : "petrol" | "diesel" |"electric"; 
    pwoer:number;
    consumption:number;

    Engine(){
        this.fuel="petrol";
        this.consumption = 0 ; 
        this.pwoer= 0 ;
    }
}
