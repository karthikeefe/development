import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '../../../node_modules/angularfire2/database';
import { Subscriber } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductcategorysService {

  constructor(private db : AngularFireDatabase) { }

  getProductCategory(){
    return this.db.list("products/categories");
  } 
}
