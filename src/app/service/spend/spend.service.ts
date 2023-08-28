import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SpendRequest } from './spendRequest';
import { Spend } from 'src/app/model/spend';
import { Expense } from 'src/app/model/expense';

@Injectable({
  providedIn: 'root'
})
export class SpendService {
  private baseUrl = 'http://localhost:8080';

  constructor( private http:HttpClient) { }

  // saveSpend(credentials:SpendRequest): Observable<Spend> {
  //   const url = `${this.baseUrl}/api/create`; // Reemplaza con la URL correcta del endpoint en Spring Boot
  //   return this.http.get<Spend>(url).pipe(  
  //   )
   
  // }
   createUser(user: any): Observable<any> {
    const url = `${this.baseUrl}/api/create`; // Cambia la URL al endpoint correcto
    return this.http.post(url, user);
  }
  getExpenseById(id:number):Observable<Expense>{
    const url=`${this.baseUrl}/expense//find/{id}`
    return this.http.get<Expense>(url)
  }
}
