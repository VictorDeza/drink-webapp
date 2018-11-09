import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../../services/product.service';
import {CategoryService} from '../../../../services/category.service';
import {Category} from '../../../categories/models/Category';

@Component({
  providers: [ProductService, CategoryService],
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form: FormGroup;
  product: Product;
  categories: Array<Category>;
  id: number;

  //Label form
  title: string = 'Add Product';
  btnSubmit: string = 'Save';

  constructor(private serviceProducts: ProductService,
              private serviceCategories: CategoryService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) {

    this.id = this.route.snapshot.params['_id'];
    this.form = new FormGroup({
      image: new FormControl(''),
      name: new FormControl('', Validators.required),
      code: new FormControl('', Validators.required),
      quantity: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^([1-9][0-9]*)$')])),
      sale_price: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^(([1-9]*)|(([1-9]*)\\.([0-9]*)))$')])),
      purchase_price: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^(([1-9]*)|(([1-9]*)\\.([0-9]*)))$')])),
      description: new FormControl(''),
      category_id: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    this.getCategories();
  }

  onSubmit(product: Product){

  }

  getCategories(){
    this.serviceCategories.getAll().subscribe(
      res => this.categories = res['data'],
      error => console.log(error)
    );
  }

  get name() { return this.form.get('name'); }
  get image() { return this.form.get('image'); }
  get code() { return this.form.get('code'); }
  get quantity() { return this.form.get('quantity'); }
  get sale_price() { return this.form.get('sale_price'); }
  get purchase_price() { return this.form.get('purchase_price'); }
  get description() { return this.form.get('description'); }
  get category_id() { return this.form.get('category_id'); }
}
