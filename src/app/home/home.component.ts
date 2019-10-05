import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { AddproductService } from '../services/addproduct.service';
import { ProductcategorysService } from '../services/productcategorys.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { product } from '../modal/productviewmodal/product';
import  'rxjs/add/operator/switchMap';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productList: product[] = [];
  productcategories: any = [];
  category: string;
  filteredProduct: product[] = [];


  constructor(private productlist: AddproductService,
    private productcategory: ProductcategorysService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.getProdcutlistkeys(this.productlist);
    this.getProductCategory(this.productcategory);
  }

  getProdcutlistkeys(productlist) {
    productlist.getProductlist().valueChanges().subscribe(product => {
      this.filteredProduct = this.productList = product;
      // return this.route.queryParamMap;
    })
    this.route.queryParamMap.subscribe(param => {
        this.category = param.get('category');
        this.filteredProduct = (this.category) ?
          this.productList.filter(p => p.categorys === this.category) :
          this.filteredProduct = this.productList;
      })
  }

  getProductCategory(productcategory) {
    productcategory.getProductCategory().valueChanges().subscribe(category => {
      this.productcategories = category;
    });
  }


}
