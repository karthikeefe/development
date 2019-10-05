import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '../../../node_modules/angularfire2/database';
import {AngularFirestore} from '@angular/fire/firestore';
import { forkJoin, Observable } from 'rxjs';
import { identifierModuleUrl } from '../../../node_modules/@angular/compiler';
import { Message } from '../admin/admin-orders/messages';

@Injectable({
  providedIn: 'root'
})
export class AddproductService {

  constructor(private db : AngularFireDatabase) {
   
   }

   addproduct_todb(product){
    this.db.list('productlist/products').push(product);
   }

   getProductListKeys(){
     let responceList = this.db.list("productlist/products");
     let responcekey = this.db.list("productlist/products");
     return forkJoin([responceList, responcekey]);
   }

   getProductlist(){
    //return this.db.collection("productlist/products").snapshotChanges();
    return this.db.list("productlist/products");
   }

   getproductkeys(){
    //return this.db.collection("productlist/products");
     return this.db.list("productlist/products");
   }

   getProductforedit(id){
     return this.db.object('/productlist/products/'+id) ;
   }

   updateProduct(id, product){
     return this.db.object('/productlist/products/'+id).update(product);
   }


   insertMessages(message: Message) {
     return this.db.list('message').push(message);
   }

   getMessages(){
     return this.db.list('message');
   }

   deleteMessages(){
     this.db.object('message').remove();
   }

   addWages_todb(wages){
    this.db.list('wages/'+ wages.spend_by).push(wages);
   }

   getAllwagesdetails(loginuser){
     return this.db.list('wages/'+loginuser);
   }
}
