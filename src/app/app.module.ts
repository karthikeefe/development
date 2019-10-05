import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms'; 
import {CustomFormsModule} from 'ng2-validation';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { environment } from '../environments/environment';
import { NewproductComponent } from './admin/newproduct/newproduct.component';
import { ProductcategorysService} from './services/productcategorys.service';
import { AddproductService } from './services/addproduct.service';
import { ProductviewmodalComponent } from './modal/productviewmodal/productviewmodal.component';
import { T11Component } from './t11/t11.component';
import { WagesdetailsComponent } from './wagesdetails/wagesdetails.component';
import {AuthgaurdService} from './services/authgaurd.service'
import {RelayService} from './services/relay.service';
import { BusrouteComponent } from './busroute/busroute.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BsNavbarComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    NewproductComponent,
    ProductviewmodalComponent,
    T11Component,
    WagesdetailsComponent,
    BusrouteComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot() ,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    CustomFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      { path:'', component: HomeComponent },
      { path:'shoppingcart', component: ShoppingCartComponent },
      { path:'checkout', component: CheckOutComponent },
      { path:'ordersuccess', component: OrderSuccessComponent },
      { path:'myorders', component: MyOrdersComponent },
      { path:'login', component: LoginComponent },

      { path:'admin/manageproducts', component: AdminProductsComponent, canActivate: [AuthgaurdService] },
      { path:'admin/manageorders', component: AdminOrdersComponent, canActivate: [AuthgaurdService] },
      { path:'t11wages', component: T11Component, canActivate: [AuthgaurdService] },
      { path: 'admin/manageproducts/newproduct', component: NewproductComponent, canActivate: [AuthgaurdService]},
      { path: 'admin/manageproducts/newproduct/:id',component: NewproductComponent, canActivate: [AuthgaurdService]},
      { path:'products',component: ProductsComponent },
      { path:'wagesdetail', component: WagesdetailsComponent, canActivate: [AuthgaurdService] },
      { path:'busroute', component: BusrouteComponent }

      

    ])
  ],
  providers: [
    ProductcategorysService,
    AddproductService,
    RelayService,
    AuthgaurdService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
