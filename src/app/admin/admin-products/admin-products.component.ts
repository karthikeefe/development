import { Component, OnInit } from '@angular/core';
import { AddproductService } from '../../services/addproduct.service';
import { timeout } from '../../../../node_modules/@types/q';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { product } from '../../modal/productviewmodal/product';
import { ExcelServicesService } from '../../services/excel-services.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  productList:any=[];
  productkeys:any=[];
  productListkey:any=[];
  searchproductListkey: product[];
  modal:boolean=false;

  editproduct:any;
  loading:boolean = true;

  cardviewTitle:string;
  cardviewPrice:number;
  cardviewCategory:string;
  cardviewImageUrl:string;


  constructor(private productlist : AddproductService,
  private excelservice : ExcelServicesService) { 
  }

  ngOnInit() {
    this.getProdcutlistkeys(this.productlist);
  }

  getProdcutlistkeys(productlist){
     productlist.getproductkeys().snapshotChanges().subscribe(products => {
      this.productkeys = products;
  
 
    productlist.getProductlist().valueChanges().subscribe(product => {
     this.productList = product;

     for(let i=0; i < this.productList.length; i++)
   {
     this.productListkey.push({title:this.productList[i].title,categorys:this.productList[i].categorys,
        imageurl:this.productList[i].imageUrl, price:this.productList[i].price, key:this.productkeys[i].key })
   }  
   this.searchproductListkey = this.productListkey;
   this.loading = false;

   });
  });
  
  }

  modalClick(list){
    this.modal=!this.modal;
    if(list){
    this.cardviewTitle = list.title;
    this.cardviewCategory = list.categorys;
    this.cardviewPrice = list.price;
    this.cardviewImageUrl = list.imageurl;
    }
  }

  searchproduct(searchvalue){
    if(!this.loading){
  this.searchproductListkey = (searchvalue) ?
  this.searchproductListkey.filter(p => p.title.toLowerCase().includes(searchvalue.toLowerCase())) :
  this.productListkey;
    }
}




}
