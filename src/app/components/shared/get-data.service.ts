import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from './card';
import { map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';

@Injectable()
export class GetDataService {

  constructor(private http: HttpClient, public datepipe: DatePipe) { }


  getProductData(){
   return this.http.get('https://fakestoreapi.com/products')
  }

  getCardData(){
    return this.http.get('https://fakestoreapi.com/carts')
    .pipe(
      map(crd =>{
        let newDataArray = [];
        for (let key in crd){
        newDataArray.push(new Card (crd[key].id, crd[key].userId, crd[key].date, crd[key].products))
        }

        newDataArray.forEach(card=>{
          card.date = new Date(card.date)
        })
        return newDataArray;
      })
    )
  }

  getUserData(){
    return this.http.get('https://fakestoreapi.com/users')
  }

  getCategoriesData(){
    return this.http.get('https://fakestoreapi.com/products/categories')
  }

  getCategoryData(category){
    return this.http.get(`https://fakestoreapi.com/products/category/${category}`)
  }
}
