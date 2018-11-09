import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  API_URL  =  '/api/products/';

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get(this.API_URL);
  }
}
