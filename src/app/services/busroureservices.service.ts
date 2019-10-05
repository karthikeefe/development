import { Injectable } from '@angular/core';
import { FirebaseDatabase } from '../../../node_modules/angularfire2';
import { AngularFireDatabase } from '../../../node_modules/angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class BusroureservicesService {

  constructor(private db : AngularFireDatabase)
   { }

   getBusroutes(){
    return this.db.list("busroute-code");
   }

   getRoute_map(){
     return this.db.list("bus-route");
   }

   getBusdetails(route_map){
    return this.db.list("busdetails/"+route_map);
   }

   getBusroute_details(route_map, busname){
     return this.db.list("busdetails/"+route_map+"/"+busname);
   }
}
