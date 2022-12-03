import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Cart } from '../models/cart';
import { Slide } from '../models/slide';
import { User } from '../models/user';
import { Product } from '../models/product';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class GetDataService {

  constructor(private http: HttpClient) { }

  // Products

  getProductData():Observable<Product[]>{
    return this.http.get<Product[]>('https://fakestoreapi.com/products')
    .pipe(catchError(this.handleError));
  }

  // Cart
  getCartData():Observable<Cart[]>{
    return this.http.get<Cart[]>('https://fakestoreapi.com/carts')
    .pipe(
      map(crd =>{
        let newDataArray = [];
        for (let key in crd){
        newDataArray.push(new Cart (crd[key].id, crd[key].userId, crd[key].date, crd[key].products))
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
  getUserData():Observable<User[]>{
    return this.http.get<User[]>('https://fakestoreapi.com/users')
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

// Slides
  getSlides():Observable<Slide[]>{
    return this.http.get<Slide[]>('../../assets/slides.json')
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
