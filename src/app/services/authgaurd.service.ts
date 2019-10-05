import { Injectable } from '@angular/core';
import { RelayService } from './relay.service';
import { Router, CanActivate } from '../../../node_modules/@angular/router';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthgaurdService implements CanActivate{

  constructor(private loginuser : RelayService,
  private router : Router) { }

  canActivate(){
return this.loginuser.receiveLoginUsername().map(user => {
  if(user.loginuser){
    return true;
  }
  else {
    this.router.navigate(['/login'])
    return false;
  }
})
  }

}
