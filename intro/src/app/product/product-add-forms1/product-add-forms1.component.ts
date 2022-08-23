import { AlertifyService } from './../../services/alertify.service';
import { ProductService } from './../../services/product.service';
import { category } from './../../category/category';
import { CategoryService } from './../../services/category.service';
import { product } from './../product';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-add-forms1',
  templateUrl: './product-add-forms1.component.html',
  styleUrls: ['./product-add-forms1.component.css'],
  providers:[CategoryService,ProductService]
})
export class ProductAddForms1Component implements OnInit {


  constructor(private CategoryService:CategoryService,private ProductService:ProductService,private AlertifyService:AlertifyService) { }
   model : product= new product();
   categories:category[];
   ngOnInit() {
    this.CategoryService.getCategories().subscribe(data=>{
      this.categories=data
    });
  }
    add(form:NgForm){
      this.ProductService.addProduct(this.model).subscribe(data=>{
        this.AlertifyService.success(data.name+" Ekleme İşlemi Başarılı");
      });
    }
}
