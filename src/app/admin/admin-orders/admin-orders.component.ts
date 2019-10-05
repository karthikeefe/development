import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ProductviewmodalComponent} from '../../modal/productviewmodal/productviewmodal.component';
import { AddproductService } from '../../services/addproduct.service';
import { Message } from '../admin-orders/messages';
import { RelayService } from '../../services/relay.service';

@Component({
  selector: 'admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {

  messagesfromDB:any=[];
  msgvalue:string="";
  loginUser:string="";

  constructor(private serviceDB : AddproductService,
  private loginsource: RelayService) {}

  ngOnInit() {
    this.setloginUser();
    this.loadMessages();
  }

  msgstore(message){
    console.log(message);
    //this.messagesfromDB.push(message);
    this.msgvalue=null;

    if(message)
    {
      let draft = new Message();
      
      this.loginsource.receiveLoginUsername().subscribe(user => 
       { 
        draft.message = "" + message;
        draft.to = "Naveen";
         draft.from  = user.loginuser
        this.serviceDB.insertMessages(draft);
       });
       
      
    }
  }

  loadMessages(){
    let DBmsg = new Message();
    this.serviceDB.getMessages().valueChanges().subscribe(msg => {
      this.messagesfromDB = msg;
    })

  }

  setloginUser(){
    this.loginsource.receiveLoginUsername().subscribe(user => 
      { 
        this.loginUser  = user.loginuser
      });
  }

  msgdelete(){
    this.serviceDB.deleteMessages();
  }
}
