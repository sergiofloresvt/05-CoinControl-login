import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expense } from '../model/expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private baseUrl = 'http://localhost:8080/gastos';

  constructor( private http:HttpClient) { }

  getExpenseById(id:number):Observable<Expense>{
    const url=`${this.baseUrl}/expense//find/{id}`
    return this.http.get<Expense>(url)
  }


/*Traer todos los registros de gastos */
  getExpense(){
    const url=`${this.baseUrl}/all`
    return this.http.get(url)
  }

  
  /*Actualizar el campo monto en la tabla gasto */
  updateExpense(expense: Expense){
    const url = `${this.baseUrl}/update/${expense.id}`
    return this.http.put(url, expense)
  }

  /*Traer los gastos de la misma categoria */
  // GetExpenseByCategory(categoryId: number){
  // const url=`${this.baseUrl}/gastos/find/bycategory/${categoryId}`
  // return this.http.get(url)  
  // }

/*Traer los gastos de la misma categoria indicando el ID que eligas */
  getExpensesByCategory(categoryId: number): Observable<Expense[]> {
    const url = `${this.baseUrl}/find/bycategory/${categoryId}`;
    return this.http.get<Expense[]>(url);
  }

  getAllCategoryIds(): Observable<number[]> {
    const url = `${this.baseUrl}/find/categoryId`;
    return this.http.get<number[]>(url);
  }

 
}
  

