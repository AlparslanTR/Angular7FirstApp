import { category } from './../category/category';
import { ProductService } from './../services/product.service';
import { AlertifyService } from './../services/alertify.service';
import { Component, OnInit } from '@angular/core';
import { product } from './product';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[AlertifyService,ProductService]
})
export class ProductComponent implements OnInit {

  constructor(private AlertifyService:AlertifyService,private ProductService:ProductService,private activatedRoute:ActivatedRoute) { }
  title="Ürün Listesi";
  filterText="";
  products:product[];

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.ProductService.getProducts(params["categoryId"]).subscribe(data=>{
        this.products=data;
      });
    })

  }
  addToCart(product){
    this.AlertifyService.success(product.description+" Başarıyla Eklendi");
  }

}
