import { Component, OnInit, inject } from '@angular/core';

import { ExpenseService } from 'src/app/service/expense.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  itemExpense: Expense[] = [];

// Lista de IDs de categoría
  categoryIds: number[]=[]; 

  // Gastos por categoría
  categoryExpenses: { [key: string]: Expense[] } = {}; 
  
  // Variable para almacenar la suma de montos
  categoryTotals: { [key: string]: number } = {}

 //Ocultal/mostrar el detalle de cada gasto
  showDetails: { [key: string]: boolean } = {};

  // Aquí almacenarás la categoría seleccionada 
  selectedCategoryId: number | null = null; 

  

  private expenseService =inject(ExpenseService)
 Object: any;
  
  ngOnInit(): void {
    this.getExpense()
    // this.getExpensesByCategory(1)
    this.getCategoryIds();
    
  }
  
  /*trae cada registro de la tabla gastos */
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
  
/*Agrupa los gastos por categoria */
getCategoryIds(): void {
  this.expenseService.getAllCategoryIds().subscribe(
    (data) => {
      this.categoryIds = data;

      // Obtener los gastos por cada categoría
      this.categoryIds.forEach((categoryId) => {
        this.getExpensesByCategory(categoryId);
      });
    },
    (error) => {
      console.error(error);
    }
  );
}

/**Agrupa todos los gastos de la misma categoria y los suma */
getExpensesByCategory(categoryId: number): void {
  this.expenseService.getExpensesByCategory(categoryId).subscribe(
    (data) => {
      this.categoryExpenses[categoryId.toString()] = data;

      // Sumar los montos para esta categoría
      this.categoryTotals[categoryId.toString()] = this.sumMontos(data);
    },
    (error) => {
      console.error(error);
    }
  );
}

/*Suma todos los importes de los gastos disponibles */
sumMontos(expenses: Expense[]): number {
  return expenses.reduce((total, expense) => total + expense.monto, 0);
}
/**Mostrar/ocultar los detalles */
toggleDetails(categoryId: number): void {
  // Cambia el estado de showDetails[categoryId] para mostrar/ocultar los detalles
  this.showDetails[categoryId.toString()] = !this.showDetails[categoryId.toString()];
}

getExpensesBySelectedCategory() {
  if (this.selectedCategoryId !== null) {
    // Llamar a la función para obtener los gastos por la categoría seleccionada
    this.getExpensesByCategory(this.selectedCategoryId);
  } else {
    // Aquí puedes manejar el caso de "Todas las categorías" si es necesario
    // Por ejemplo, puedes mostrar todos los gastos sin filtrar
  }
}
}


interface Expense {
  id: number;
  monto: number;
  inputMonto?: string; // Campo para vincular el input en el HTML
  description: string
  date?: string
  category_id: number,
  // showInput?: boolean; // Propiedad para mostrar u ocultar el campo y el botón
}

