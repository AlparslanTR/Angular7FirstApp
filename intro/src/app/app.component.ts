import { AccountService } from './services/account.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private AccountService:AccountService){}
  title = 'intro';
  firstName='Alparslan';

  isLoggedin(){
   return this.AccountService.isLoggedIn();
  }
  logOut(){
    this.AccountService.logOut();
  }
}
