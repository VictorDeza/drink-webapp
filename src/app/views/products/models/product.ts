export class Product {

  constructor(
    public id: number,
    public name: string,
    public code: string,
    public quantity: number,
    public sale_price: number,
    public purchase_price: number,
    public status: boolean,
    public image: any,
    public description: string,
    public category_id: number
  ) {  }

}
