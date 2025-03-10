import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
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

  expense_date='';

  private _trackerServ= new TrackerService;
  private _router= new Router;
  
  newTransaction!:Transaction;

  // incomeForm:FormGroup;

  // dateNotInFutureValidator(): ValidatorFn {
  //   return (control: AbstractControl): ValidationErrors | null => {
  //     const currentDate = new Date();
  //     const selectedDate = new Date(control.value);
  
  //     if (selectedDate > currentDate) {
  //       return { futureDate: true };
  //     }
  //     return null;
  //   };
  // }


  handleIncomeAction(){

    // if (this.incomeForm.valid) {
    //   // assigns values to a new object of type transaction
    //   this.newTransaction={
    //   amount: this.incomeForm.get('amount')?.value,
    //   category: this.incomeForm.get('income_type')?.value,
    //   paymentMethod: this.incomeForm.get('payment_type')?.value,
    //   date: this.incomeForm.get('date')?.value,
    //   type:'income', // gives the type income to the transaction
    //   }
    //   // add the new transaction to the array of transactions by tracker service
    //   this._trackerServ.addTransaction(this.newTransaction);
    // }
    // this._router.navigate(['/overview']); // navigates to the overview page on submitting the form

  }

}
