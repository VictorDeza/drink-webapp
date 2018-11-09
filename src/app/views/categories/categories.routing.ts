import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from './components/list';

const categories_routes: Routes = [
  {
    path: '', children:
      [
        {path: '', component: ListComponent}
      ]
  }
];
export const categoriesRouting = RouterModule.forChild(categories_routes);
