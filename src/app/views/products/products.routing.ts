import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from './components/list';
import {FormComponent} from './components/form/form.component';

const products_routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ListComponent,
        data: {
          title: 'Products'
        }
      },
      {
        path: 'add',
        component: FormComponent,
        data: {
          title: 'Add Product'
        }
      }
    ]
  }
];
export const productsRouting = RouterModule.forChild(products_routes);
