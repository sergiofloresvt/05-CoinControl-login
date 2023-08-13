import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/auth/login.service';
import { LoginRequest } from 'src/app/service/auth/loginRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
/*Variable para mostrar el error */
loginError: string=''

/*Creamos un variable para el formulario
reactivo con el servio formBuilder*/
  loginForm= this.fb.group({
    email:['sergioflores@gmail.com',[Validators.required,Validators.email]],
    pass:['',Validators.required]
    
  })
  

constructor( private fb: FormBuilder,
            private router:Router,
            private loginService:LoginService){
  

}
  ngOnInit(): void {
    
  }
  /*Usamos estos get para no cargar el html de validacion */
  get email(){
    return this.loginForm.controls.email;
  }
  get pass(){
    return this.loginForm.controls.pass;
  }
  //Boton de inicio de sesion
  login(){
    if(this.loginForm.valid){
      this.loginService.login(this.loginForm.value as LoginRequest).subscribe({
       next:(userData)=>{
        console.log(userData)
       },
       error: (errorData)=>{
        console.error(errorData)
        this.loginError=errorData
       },
       complete: ()=>{
        console.info("Registro completado")
        this.router.navigateByUrl('/inicio');
        this.loginForm.reset();
       } 
      })
      // console.log("llamar al servicio de login");
      
    }
    else{
      this.loginForm.markAllAsTouched();
     
    }
  }
}
