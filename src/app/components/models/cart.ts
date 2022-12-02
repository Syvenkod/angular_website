export class Cart{
    constructor ( readonly id: number,
        readonly userId: number,
        readonly date: Date,
        readonly products: any [])
        {}
  }