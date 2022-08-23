import { Observable } from 'rxjs';
import { category } from './../category/category';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class CategoryService {

  constructor(private Http:HttpClient) { }
  path="http://localhost:3000/categories";

  getCategories():Observable<category[]>{
    return this.Http.get<category[]>(this.path);
  }
}
