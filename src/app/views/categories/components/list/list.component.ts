import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../../../services/category.service';
import {Category} from '../../models/Category';

@Component({
  providers: [CategoryService],
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  categories: Array<Category>;

  constructor(private serviceCategories: CategoryService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.serviceCategories.getAll().subscribe(
      res => {
        this.categories = res['data'];
        console.log(this.categories);
      },
      error => {
        console.log(error);
      }
    );
  }

}
