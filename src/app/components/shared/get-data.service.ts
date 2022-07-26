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
    return this.http.get('https://fakestoreapi.com/carts').pipe(
      map(crd =>{
        let newDataArray = [];
        for (let key in crd){
        newDataArray.push(new Card (crd[key].id, crd[key].userId, crd[key].date, [crd[key].productsCard]))
        }
        console.log(newDataArray);
        newDataArray.forEach(card=>{
          card.date = this.datepipe.transform(card.date, 'MM/dd/YYYY')
        })
        return newDataArray;
      })
    )
  }
}
