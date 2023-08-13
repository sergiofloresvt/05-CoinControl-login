import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/auth/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
// Para quitar la etiqueta html cierre de sesion
userloginOn: boolean = false;

constructor( private loginService: LoginService){}
  
ngOnInit(): void {
   this.loginService.actualUserLoginOn.subscribe(
    {
      next:(userloginOn) =>{
        this.userloginOn =userloginOn
      }

   })
  }
}
