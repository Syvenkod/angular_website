import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GetDataService {

  constructor(private http: HttpClient) { }

  getData(){
   return this.http.get('https://fakestoreapi.com/products')
  }
}
