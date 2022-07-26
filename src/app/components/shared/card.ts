export class Card{
   readonly id: number;
   readonly userId: number;
   readonly date: number;
   readonly productsCard: any;
    constructor (id:number, userId: number, date: number, productsCard: any){
        this.id = id;
        this.userId = userId;
        this.date = date;
        this.productsCard = productsCard;
        }
  }