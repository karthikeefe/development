import { Component, OnInit } from '@angular/core';
import { ProductcategorysService } from './../../services/productcategorys.service'
import { AddproductService } from '../../services/addproduct.service';
import { IfStmt } from '../../../../node_modules/@angular/compiler';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {

  id;
  productcategory:any ;
  category:any=[];
  saveError:boolean=false;
  saveSuccess:boolean=false;

  editproduct:any={};

  constructor(
    private router : Router,
   private productcategorys : ProductcategorysService,
    private addproduct : AddproductService,
  private route : ActivatedRoute)
    {
      this.id= this.route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    
   this.loadcategory(this.productcategorys);     
    this.getEditproduct();
  }

  loadcategory(productcategorys)
  {
    productcategorys.getProductCategory().valueChanges().subscribe(
       categories => {
         this.productcategory = categories;
         for(let i=0; i < this.productcategory.length; i++)
         {
           this.category.push(this.productcategory[i]);
         //console.log(this.productcategory[i]);
         }
       }
     );
  }

  saveproduct(product){
    
    if((product.title.length > 3) && (product.price > 0)  && (product.imageUrl.length > 0) && (product.categorys.length > 0))
    {
       this.saveError=false;
       this.saveSuccess=true;
      if(this.id)
      {
        this.addproduct.updateProduct(this.id, this.editproduct);
      }
      else{
       this.addproduct.addproduct_todb(product); 
      }
      setTimeout(()=>{    //<<<---    using ()=> syntax
        this.saveSuccess = false;
        this.router.navigate(["admin/manageproducts"]); 
   }, 4000);   
    }
    else{
      this.saveError = true;
    }
  
    
  }

  getEditproduct(){
    this.id= this.route.snapshot.paramMap.get('id');
    if(this.id){
     this.addproduct.getProductforedit(this.id).valueChanges().subscribe(res => {
        this.editproduct = res;
        //console.log("Edit pro"+this.editproduct.title);      
      })
    }
  }

}
