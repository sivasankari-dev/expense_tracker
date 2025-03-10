import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TrackerService } from '../../services/tracker/tracker.service';
import { Transaction } from '../../classes/transaction/transaction';
import { Router } from '@angular/router';


@Component({
  selector: 'app-income-action',
  imports: [CommonModule, FormsModule],
  templateUrl: './income-action.component.html',
  styleUrl: './income-action.component.css'
})
export class IncomeActionComponent {

  income_date='';
  income_amount=0;
  income_type='';
  payment_type='';

  private _trackerServ= new TrackerService;
  private _router= new Router;
  
  newTransaction!:Transaction;

  maxDate: string =  new Date().toISOString().split('T')[0];

  handleIncomeAction(incomeForm:any){

    // console.log(incomeForm.value);

    if (incomeForm.valid) {
      // assigns values to a new object of type transaction
      this.newTransaction={
      amount: this.income_amount,
      category: this.income_type,
      paymentMethod: this.payment_type,
      date: new Date(this.income_date),
      type:'income', // gives the type income to the transaction
      }
      // add the new transaction to the array of transactions by tracker service
      this._trackerServ.addTransaction(this.newTransaction);
    }
    this._router.navigate(['/summary']); // navigates to the overview page on submitting the form

  }

}
