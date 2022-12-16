import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommanService {
  bonus_value = new Subject();
  moneyFor = new Subject();
  constructor() { }
}
