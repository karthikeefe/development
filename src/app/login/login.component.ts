import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppModule } from '../app.module';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Observable} from 'rxjs'
import { FormBuilder,FormGroup,Validators, FormsModule } from '@angular/forms';
import { RelayService } from '../services/relay.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  firebaseDB:any[];
  loginForm: FormGroup;
  success_loginMessage:boolean=false;
  wrong_usernameMessage:boolean=false;
  wrong_passwordMessage:boolean=false;
  loggedIN:boolean=false;
  //loginUsername:string;


  constructor(db: AngularFireDatabase, private formbuilder : FormBuilder, private relayUpdate : RelayService) { 
     db.list('/usercredentials/username').valueChanges().
     subscribe(users => {
       this.firebaseDB = users;
     });
    
  }

  ngOnInit() {
    this.loginForm = this.formbuilder.group({
      username:[],
      password: []
   }); 
  }

  loginClick(){
    //console.log(this.loginForm.controls.username.value)
    
    if(this.validUserCheck(this.loginForm.controls.username.value, this.loginForm.controls.password.value))
    {
      this.success_loginMessage = true;
      this.wrong_usernameMessage = false;
      this.wrong_passwordMessage = false;
      this.loginForm.reset();
    }
    else{
      this.success_loginMessage = false;
    } 

  }
  validUserCheck(form_Username:string, form_Password:string)
  {
    let usernameMessage:boolean=true;
    for(let i=0; i<this.firebaseDB.length; i++)
    {
      if(this.firebaseDB[i].username == form_Username)
      {
        usernameMessage = false;
        if(this.firebaseDB[i].password == form_Password)
        {
          this.relayUpdate.updateLoginUsername({loginuser:form_Username,adminuser:this.firebaseDB[i].adminuser});
          this.loggedIN=true;
         return true;
        }
        else{
          this.wrong_passwordMessage=true;
          return false;
        }
      }
    }
    this.wrong_usernameMessage = usernameMessage;
     }

}
