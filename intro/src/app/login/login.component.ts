import { user } from './user';
import { AccountService } from './../services/account.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model:user= new user();
  constructor(private AccountService:AccountService) { }

  ngOnInit() {
  }
  login(form:NgForm){
    this.AccountService.login(this.model);
  }

}
