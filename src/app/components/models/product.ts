export class Product{
    constructor ( readonly category: string,
        readonly description: string,
        readonly id: number,
        readonly image: string,
        readonly price: number,
        readonly title: string)
        {}
  }