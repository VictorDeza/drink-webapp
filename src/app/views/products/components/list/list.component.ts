import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../services/product.service';
import { Product } from '../../models/product';

@Component({
  providers: [ProductService],
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  products: Array<Product>;

  constructor(private serviceProducts: ProductService) { }

  ngOnInit() {
    this.getall();
  }

  getall() {
    this.serviceProducts.getAll().subscribe(
      res => {
        this.products = res['data'];
      },
      error => {
        console.log(error);
      });
  }

}
