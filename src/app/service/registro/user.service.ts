import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8080';

  constructor( private http: HttpClient) { }
  
  createUser(user: any): Observable<any> {
    const url = `${this.baseUrl}/api/create`; // Cambia la URL al endpoint correcto
    return this.http.post(url, user);
  }
}
