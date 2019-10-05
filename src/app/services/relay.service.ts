import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class RelayService {

  private loginSource = new BehaviorSubject("");  
  private productSource = new BehaviorSubject("");

  constructor() { }

  updateLoginUsername(login:any){
    this.loginSource.next(login);
  }

  receiveLoginUsername() : Observable<any> {
    return this.loginSource.asObservable();
  }

  emitupdateProduct(product:any){
    this.productSource.next(product);
  }

  receiveupdateProduct() : Observable<any> {
    return this.productSource.asObservable();
  }

}
