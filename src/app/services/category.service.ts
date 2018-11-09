import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  API_URL = 'https://drink-api-restful.herokuapp.com/api/categories/';

  constructor(private httpClient: HttpClient) {
  }

  getAll() {
    return this.httpClient.get(this.API_URL);
  }
}

