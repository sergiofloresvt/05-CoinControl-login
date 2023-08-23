import { Component } from '@angular/core';
import { UserService } from 'src/app/service/registro/user.service';

@Component({
  selector: 'app-userformulario',
  templateUrl: './userformulario.component.html',
  styleUrls: ['./userformulario.component.css']
})
export class UserformularioComponent {

  user: any = {}
  constructor(private userService: UserService) {}

  onSubmit() {
    this.userService.createUser(this.user)
      .subscribe(
        response => {
          console.log('User created successfully', response);
          // Realiza cualquier acción que necesites después de crear el usuario
        },
        error => {
          console.error('Error creating user', error);
          // Maneja el error de manera apropiada
        }
      );
  }
}
