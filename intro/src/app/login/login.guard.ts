import { AccountService } from './../services/account.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()

export class loginGuard implements CanActivate{
  constructor(private AccountService:AccountService,private router:Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    let logged=this.AccountService.isLoggedIn();
    if(logged){
      return true;
    }
    this.router.navigate(["login"]);
    return false;
  }


  }


