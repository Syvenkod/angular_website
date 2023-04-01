import { CartList } from './../models/cart-list';
import { Injectable} from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Slide } from '../models/slide';
import { User } from '../models/user';
import { Product } from '../models/product';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

const BASE_URL = 'https://fakestoreapi.com';

@Injectable()
export class GetDataService {

  constructor(private http: HttpClient) { }

  // Products

  getProductData(category?: string):Observable<Product[]>{
    return this.http.get<Product[]>(
      `${BASE_URL}/products${
        category? '/category/' + category : ''
      }`)
    .pipe(catchError(this.handleError));
  }

  // Cartlist
  getCartData():Observable<CartList[]>{
    return this.http.get<CartList[]>(`${BASE_URL}/carts`)
    .pipe(
      map(crd =>{
        let newDataArray = [];
        for (let key in crd){
        newDataArray.push(new CartList (crd[key].id, crd[key].userId, crd[key].date, crd[key].products))
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
    return this.http.get<User[]>(`${BASE_URL}/users`)
    .pipe(catchError(this.handleError));
  }

// Categories
  getCategoriesData(): Observable<string[]>{
    return this.http.get<string[]>(`${BASE_URL}/products/categories`)
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
