import { Component, OnInit } from '@angular/core';
import { ExcelServicesService } from '../services/excel-services.service';
import { AddproductService } from '../services/addproduct.service';
import { RelayService } from '../services/relay.service';

@Component({
  selector: 'app-wagesdetails',
  templateUrl: './wagesdetails.component.html',
  styleUrls: ['./wagesdetails.component.css']
})
export class WagesdetailsComponent implements OnInit {

  wagesdetails:any;
  loginuser:string;

  constructor(
    private excelservice : ExcelServicesService,
    private getAllwagesdetails : AddproductService,
    private user : RelayService
  ) { }

  ngOnInit() {
    this.user.receiveLoginUsername().subscribe(user =>{
      this.loginuser = user.loginuser;
    })
this.load_wagestable();
  }

  load_wagestable(){
this.getAllwagesdetails.getAllwagesdetails(this.loginuser).valueChanges().subscribe(details =>{
  this.wagesdetails = details;
})
  }

  exportintoexcel(){
    this.excelservice.exportAsexcelfile(this.wagesdetails, this.loginuser+'_Dailywages');
  }

}
