import { Injectable } from '@angular/core';
import { LoginRequest } from './loginRequest';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError, BehaviorSubject, tap } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 /*Con esta varible hacemos la suscripcion cuando el usuario
 alla iniciado sesion y cambiaremos la vista para este user */
  actualUserLoginOn: BehaviorSubject<boolean>= new BehaviorSubject <boolean>(false)

  actualUserData: BehaviorSubject<User> = new BehaviorSubject<User>({id:0, email:''});
  constructor( private http:HttpClient) { }

  login(credentials:LoginRequest):Observable<User>{
    return this.http.get<User>('../assets/data.json').pipe(
      tap(userData =>{
        this.actualUserData.next(userData);
        this.actualUserLoginOn.next(true)

      }),
      catchError(this.handleError)
    )
    // console.log(credentials)
    /* Este método devuelve un objeto Observable<any>
     cuando haces la solicitud HTTP, estás obteniendo
     un Observable que emite un evento cuando la respuesta 
     llega. Puedes suscribirte a este Observable para recibir 
     y manejar la respuesta.
     */
  }
  /*Con esta funcion centralizamos el manejo de erros  */
  private handleError(error:HttpErrorResponse){
    if(error.status===0){
      console.error('Se ha producido un error', error.error);
      /*Un código de estado 0 indica que no se pudo
      establecer una conexión con el servidor. */
    }
    else{
      console.error('Backend retorno el codigo de estado',
      error.status, error.error)
      /**Si el código de estado no es 0 (lo que significa que 
       * proviene del backend), el bloque else se ejecuta. En este caso, se
       * imprime un mensaje de error que incluye el código de estado y el mensaje 
       * de error proporcionados por el servidor. */
    }
    return throwError(()=> new Error('Algo salio mal. Por favor intente nuevamente'))
  }

  get userData():Observable<User>{
    return this.actualUserData.asObservable();
  }
  get Userlogin():Observable<Boolean>{
    return this.actualUserLoginOn.asObservable();
    
  }
}
