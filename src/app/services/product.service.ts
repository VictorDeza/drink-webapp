import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  API_URL  =  'https://drink-api-restful.herokuapp.com/api/products/';

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get(this.API_URL);
  }
}
