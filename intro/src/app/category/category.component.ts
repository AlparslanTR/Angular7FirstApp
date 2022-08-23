import { CategoryService } from './../services/category.service';
import { Component, OnInit } from '@angular/core';
import { category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[CategoryService]
})
export class CategoryComponent implements OnInit {

  constructor(private CategoryService:CategoryService) { }
  title="Kategoriler";
  categories:category[];

  ngOnInit() {
    this.CategoryService.getCategories().subscribe(data=>{
      this.categories=data;
    })
  }

}
