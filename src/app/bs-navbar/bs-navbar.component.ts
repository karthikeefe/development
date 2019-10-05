import { Component, OnInit } from '@angular/core';
import { RelayService } from '../services/relay.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  loginUsername:string;
  adminuser:boolean;
  isColapse:boolean=true;
  constructor(private relayupdate : RelayService) {

   }
   
   colapse() {
    this.isColapse = !this.isColapse;
   }

  ngOnInit() {
    this.service_receiveUserName();
  }

service_receiveUserName(){
  this.relayupdate.receiveLoginUsername().subscribe(user => {
    this.loginUsername = user.loginuser;
    this.adminuser = user.adminuser;
  });
}

logout(){
  this.loginUsername = null;
  this.adminuser = false; 
}

}
