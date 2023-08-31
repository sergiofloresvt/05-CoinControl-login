import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expense } from '../model/expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private baseUrl = 'http://localhost:8080';

  constructor( private http:HttpClient) { }

  getExpenseById(id:number):Observable<Expense>{
    const url=`${this.baseUrl}/expense//find/{id}`
    return this.http.get<Expense>(url)
  }

  getExpense(){
    const url=`${this.baseUrl}/gastos/all`
    return this.http.get(url)
  }
  /*Actualizar la suma del gasto  */
  updateExpense(expense: Expense){
    const url = `${this.baseUrl}/gastos/update/${expense.id}`
    return this.http.put(url, expense)
  }
}
