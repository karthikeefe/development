import { Component, OnInit } from '@angular/core';
import { RelayService } from '../services/relay.service';
import { AddproductService } from '../services/addproduct.service';
import { Spendform } from '../modal/spendform';

@Component({
  selector: 't11',
  templateUrl: './t11.component.html',
  styleUrls: ['./t11.component.css']
})
export class T11Component implements OnInit {

  spendbyuser:string="";
  myDateValue: Date;
  resetForm:string="";
  formNullError:boolean = false;

  formpojo:Spendform;


  constructor(private loginuser: RelayService,
  private addwages : AddproductService
  ) {
    loginuser.receiveLoginUsername().subscribe(user => 
    this.spendbyuser = user.loginuser
  )}

  ngOnInit() {
    this.myDateValue = new Date();
    this.formpojo = new Spendform();
  }

  onDateChange(newDate: Date) {
    console.log(newDate);
  }

  submitspend(spendform){
    console.log(this.myDateValue)
    this.formpojo.spend_by = this.spendbyuser;
    this.formpojo.spended_date = "" + this.myDateValue;
    this.formpojo.amount_spend = spendform.inputamount;
    this.formpojo.spend_for = spendform.inputspendfor;
    console.log(this.formpojo.spend_by);

    if(this.formpojo.spend_by != null)
    {  
      this.addwages.addWages_todb(this.formpojo);
      this.resetForm = null;
    }
    else{
      this.formNullError = true;
    }

  }

}
