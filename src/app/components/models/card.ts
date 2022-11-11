export class Card{
    constructor ( readonly id: number,
        readonly userId: number,
        readonly date: Date,
        readonly products: any [])
        {
        this.id = id;
        this.userId = userId;
        this.date = date;
        this.products = products;
        }
  }