import { AlertifyService } from './../../services/alertify.service';
import { ProductService } from './../../services/product.service';
import { CategoryService } from './../../services/category.service';
import { product } from './../product';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { category } from './../../category/category';

@Component({
  selector: 'app-product-add-forms2',
  templateUrl: './product-add-forms2.component.html',
  styleUrls: ['./product-add-forms2.component.css'],
  providers:[CategoryService,ProductService]
})
export class ProductAddForms2Component implements OnInit {

  constructor(private formBuilder:FormBuilder, private CategoryService:CategoryService,private ProductService:ProductService,private AlertifyService:AlertifyService) { }

  productAddForm:FormGroup;
  product:product=new product();
  categories:category[];
  createproductAddForm(){
    this.productAddForm=this.formBuilder.group({
      name:["",Validators.required],
      price:["",Validators.required],
      categoryId:["",Validators.required],
      description:["",Validators.required],
      imageUrl:["",Validators.required]
    });
  }
  ngOnInit() {
    this.createproductAddForm();
    this.CategoryService.getCategories().subscribe(data=>{
      this.categories=data
    });
  }
  add(){
    if(this.productAddForm.valid){
      this.product=Object.assign({},this.productAddForm.value)
    }
    this.ProductService.addProduct(this.product).subscribe(data=>{
      this.AlertifyService.success(data.name+" Ekleme İşlemi Başarılı");
    });
  }
}
