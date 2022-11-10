import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Card } from './card';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class GetDataService {

  constructor(private http: HttpClient) { }

  // Products

  getProductData(){
    return this.http.get('https://fakestoreapi.com/products')
    .pipe(catchError(this.handleError));
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
    .pipe(catchError(this.handleError));
  }

// Users
  getUserData(){
    return this.http.get('https://fakestoreapi.com/users')
    .pipe(catchError(this.handleError));
  }
// Categories
  getCategoriesData(){
    return this.http.get('https://fakestoreapi.com/products/categories')
    .pipe(catchError(this.handleError));
  }

  getCategoryData(category){
    return this.http.get(`https://fakestoreapi.com/products/category/${category}`)
    .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }

    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
