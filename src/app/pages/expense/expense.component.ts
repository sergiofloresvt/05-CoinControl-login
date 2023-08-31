import { Component, OnInit, inject } from '@angular/core';

import { ExpenseService } from 'src/app/service/expense.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  itemExpense: Expense[] = [];

  private expenseService =inject(ExpenseService)
  
  ngOnInit(): void {
    this.getExpense()
  }
  
  getExpense():void {
    this.expenseService.getExpense()
    .subscribe((data: any)=>{
      {
        this.itemExpense =data

      }
    }, (error:any) =>{
      console.log("Error: ", error)
    })
  }
  addMonto(item: Expense): void {
    if (item.inputMonto) {
      item.monto += parseFloat(item.inputMonto);
      item.inputMonto = ''; // Limpia el input después de la suma
    
    this.expenseService.updateExpense(item).subscribe((response:any)=>
    {
      console.log('Monto actualizado', response)
    },
    (error:any)=>{
      console.error('Error al actualizar', error)
    }
    )
    }
  }

//   toggleInput(item: Expense): void {
//     item.showInput = !item.showInput;
//     item.inputMonto = ''; // Limpia el campo de entrada al ocultar
//   }
// }

}

interface Expense {
  id: number;
  monto: number;
  inputMonto?: string; // Campo para vincular el input en el HTML
  // showInput?: boolean; // Propiedad para mostrar u ocultar el campo y el botón
}

