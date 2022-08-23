import { product } from './../product/product';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {tap,catchError} from 'rxjs/operators';
@Injectable()
export class ProductService {

  constructor(private http:HttpClient) { }
  path="http://localhost:3000/products";

  getProducts(categoryId):Observable<product[]>{
    let newPath=this.path;
    if(categoryId){
      newPath= newPath+"?categoryId="+categoryId;
    }
    return this.http.get<product[]>(newPath).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  addProduct(product:product):Observable<product>{
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Token'
      })
    }
    return this.http.post<product>(this.path,product,httpOptions).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  handleError(err:HttpErrorResponse){
    let errorMessage="Hata";
    if(err.error instanceof ErrorEvent){
      errorMessage = "Bir Hata Oluştu"+err.error.message
    }
    else{
      errorMessage="Sistemsel Bir Hata Oluştu"
    }
      return throwError(errorMessage);
  }
}
