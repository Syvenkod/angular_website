export class Card{
   readonly id: number;
   readonly userId: number;
   readonly date: number;
   readonly products: any [];
    constructor (id:number, userId: number, date: number, products: any []){
        this.id = id;
        this.userId = userId;
        this.date = date;
        this.products = products;
        }
  }