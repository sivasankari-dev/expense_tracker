import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ExpenseActionComponent } from '../../components/expense-action/expense-action.component';
import { IncomeActionComponent } from '../../components/income-action/income-action.component';

@Component({
  selector: 'app-new-transaction',
  imports: [CommonModule,ExpenseActionComponent, IncomeActionComponent],
  templateUrl: './new-transaction.component.html',
  styleUrl: './new-transaction.component.css'
})
export class NewTransactionComponent {

  expenseActionChosen = true;
  incomeActionChosen = false;
  // a method to show the expense transaction form
  choseExpenseAction(){
    this.expenseActionChosen= true;
    this.incomeActionChosen = false;
  }
  // a method to show the income transaction form
  choseIncomeAction(){
    this.incomeActionChosen= true;
    this.expenseActionChosen= false;
  }

}
