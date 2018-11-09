import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { productsRouting } from './products.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    productsRouting,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ListComponent, FormComponent]
})
export class ProductsModule { }
