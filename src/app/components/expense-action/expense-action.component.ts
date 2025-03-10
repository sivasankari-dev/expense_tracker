import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { TrackerService } from '../../services/tracker/tracker.service';
import { Transaction } from '../../classes/transaction/transaction';

@Component({
  selector: 'app-expense-action',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './expense-action.component.html',
  styleUrl: './expense-action.component.css'
})
export class ExpenseActionComponent {
  
  expense_date='';
  expense_amount=0;
  expense_type='';
  payment_type='';

  private _trackerServ= new TrackerService;
  private _router= new Router;
    
  newTransaction!:Transaction;

  maxDate: string =  new Date().toISOString().split('T')[0];

  handleExpenseAction(expenseForm:any){

    // console.log(incomeForm.value);

    if (expenseForm.valid) {
      // assigns values to a new object of type transaction
      this.newTransaction={
      amount: this.expense_amount,
      category: this.expense_type,
      paymentMethod: this.payment_type,
      date: new Date(this.expense_date),
      type:'expense', // gives the type income to the transaction
      }
      // add the new transaction to the array of transactions by tracker service
      this._trackerServ.addTransaction(this.newTransaction);
    }
    this._router.navigate(['/summary']); // navigates to the overview page on submitting the form

  }


}
