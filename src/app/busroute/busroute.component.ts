import { Component, OnInit } from '@angular/core';
import { BusroureservicesService } from '../services/busroureservices.service';
import {busdetails_tabledata} from '../modal/busdetails_tabledata';

@Component({
  selector: 'app-busroute',
  templateUrl: './busroute.component.html',
  styleUrls: ['./busroute.component.css']
})
export class BusrouteComponent implements OnInit {

  busroutes: any[];
  formNullinput_error: boolean = false;
  routeNotavailable_error: boolean = false;

  output_routemaps:any=[];
  busdetails_tabledata:busdetails_tabledata[];
 // busdetail_list:any[];
 busdetail_tablelist:any=[];

  constructor(private busroute: BusroureservicesService) { }

  ngOnInit() {
    this.getBusroutes();
  }

  getBusroutes() {
    this.busroute.getBusroutes().valueChanges().subscribe(routes => {
      this.busroutes = routes;
    })
  }

  searchbus(f) {
    this.formNullinput_error = false;
    this.routeNotavailable_error = false;
    if (f.fromplace != "" && f.designation != "") {
      for (let i = 0; i < this.busroutes.length; i++) {
        if (f.fromplace == this.busroutes[i].code) {
          this.routeNotavailable_error = false;
          break;
        }
        else {
          this.routeNotavailable_error = true;
        }
      }
      for (let i = 0; i < this.busroutes.length; i++) {
        if (f.designation == this.busroutes[i].code) {
          this.routeNotavailable_error = false;
          break;
        }
        else {
          this.routeNotavailable_error = true;
        }
      }
      if(!this.routeNotavailable_error && !this.formNullinput_error){
       
        //calling function for getroute map-code
        this.getRoute_mapcode(f.fromplace,f.designation);
      }

    }
    else {
      this.formNullinput_error = true;
    }
    
  }

  getRoute_mapcode(fromplace, designation){
    let routemap:any=[];
    let routemap_code:any=[];
    let map_true:boolean=false;
    let map1_true:boolean=false;

    this.busroute.getRoute_map().valueChanges().subscribe(value => {
      routemap = value;
      for(let i=0; i<routemap.length; i++){
        routemap_code = routemap[i].split(":");

        for(let map_code of routemap_code){
          if(map_code == fromplace.split("-")[1]){
            map_true=true;
          }
          if(map_code == designation.split("-")[1]){
            map1_true=true;
          }
          
        }
        if(map_true && map1_true){
          this.output_routemaps.push(routemap[i]);
        }
      }
      this.loadbus_details_table(this.output_routemaps, fromplace, designation);
    })
  }

  loadbus_details_table(output_routemaps, fromplace, designation){
    let pass_startpoint:string;
    let pass_designation:string;

    for(let routmap of output_routemaps){
      this.busroute.getBusdetails(routmap).valueChanges().subscribe(maps => {
        let busdetail_list:any=[] = maps;
        
        for(let i=0; i<busdetail_list.length; i++)
        {
          let busdetails:any=[] = Object.values(busdetail_list[i]);

            for(let i of busdetails){
              if(""+i.split("-")[0].toLowerCase() == fromplace.split("-")[0].toLowerCase())
              {
                pass_startpoint = i;
              }
              if(""+i.split("-")[0].toLowerCase() == designation.split("-")[0].toLowerCase())
              {
                pass_designation = i;
              }
            }
            for(let detail of busdetail_list){        
              this.busdetail_tablelist.push({bus_name: detail.busname,
              bus_start_point: detail.startpoint,
              bus_end_point: detail.endpoint,
              your_start_point: pass_startpoint,
              your_designation: pass_designation
            });
            } 
           // return this.busdetail_tablelist;
          this.busdetails_tabledata = this.busdetail_tablelist;
        }
      })
    }

  }

}
