import { user } from './../login/user';
import { Injectable } from '@angular/core';

@Injectable()
export class AccountService {

  constructor() { }
  loggedIn=false;
  login(user:user):boolean{
    if(user.username=="Alparslan"&&user.password=="123456"){
      this.loggedIn=true;
      localStorage.setItem("isLogged",user.username);
      return true;
    }
    else{
      return false;
    }
  }
  isLoggedIn(){
    return this.loggedIn;
  }
  logOut(){
    localStorage.removeItem("isLogged");
    this.loggedIn=false;
  }
}
