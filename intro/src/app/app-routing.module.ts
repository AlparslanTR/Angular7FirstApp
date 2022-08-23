import { loginGuard } from './login/login.guard';
import { LoginComponent } from './login/login.component';
import { ProductAddForms2Component } from './product/product-add-forms2/product-add-forms2.component';
import { ProductComponent } from './product/product.component';
import { product } from './product/product';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddForms1Component } from './product/product-add-forms1/product-add-forms1.component';

const routes: Routes = [
  {path:"products",component:ProductComponent},
  {path:"",redirectTo:'products',pathMatch:"full"},
  {path:'products/category/:categoryId',component:ProductComponent},
  {path:'product-add-1',component:ProductAddForms1Component,canActivate:[loginGuard]},
  {path:'product-add-2',component:ProductAddForms2Component},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
