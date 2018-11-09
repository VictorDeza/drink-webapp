import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { categoriesRouting } from './categories.routing';

@NgModule({
  imports: [
    CommonModule,
    categoriesRouting,
    HttpClientModule
  ],
  declarations: [FormComponent, ListComponent]
})
export class CategoriesModule { }
