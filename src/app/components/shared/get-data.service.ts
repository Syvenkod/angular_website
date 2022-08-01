import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from './card';
import { map } from 'rxjs/operators';

@Injectable()
export class GetDataService {

  constructor(private http: HttpClient) { }

  // Products

  getProductData(){
    return this.http.get('https://fakestoreapi.com/products')
  }

  getPriceDec(){
    return this.http.get('https://fakestoreapi.com/products')
    .pipe(
      map((dec: any[]) =>{
        dec.sort((a,b) => (b.price - a.price))
        return dec;
      })
    )
  }

  getPriceInc(){
    return this.http.get('https://fakestoreapi.com/products')
    .pipe(
      map((inc: any[]) =>{
        inc.sort((a,b) => (a.price - b.price))
        return inc;
      })
    )
  }

  // Cart
  getCartData(){
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

// Users
  getUserData(){
    return this.http.get('https://fakestoreapi.com/users')
  }
// Categories
  getCategoriesData(){
    return this.http.get('https://fakestoreapi.com/products/categories')
  }

  getCategoryData(category){
    return this.http.get(`https://fakestoreapi.com/products/category/${category}`)
  }
}
