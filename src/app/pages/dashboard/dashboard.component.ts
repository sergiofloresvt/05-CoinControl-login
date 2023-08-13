import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/auth/login.service';
import { User } from 'src/app/service/auth/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  //Variable para marcar que esta autenticado el usuario
  userLoginOn: boolean =false
  userData? : User
  constructor( private loginService: LoginService){}
  ngOnInit(): void {
    this.loginService.actualUserLoginOn.subscribe(
      {
        next:(userLoginOn) =>{
          this.userLoginOn = userLoginOn
        }
      });

      this.loginService.actualUserData.subscribe(
        {
          next: (userLoginOn) =>{
            this.userData = this.userData
          }
        }
      )
  }


}
