import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  category$ = new BehaviorSubject("")
  constructor() { }

  clickedCategory(data: string) {
    this.category$.next(data);
  }
}
