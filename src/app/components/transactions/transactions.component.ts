import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TrackerService } from '../../services/tracker/tracker.service';
import { Transaction } from '../../classes/transaction/transaction';
import { FormsModule } from '@angular/forms';
import { AmountSearchPipe } from '../../pipes/amount-search/amount-search.pipe';
import { DateSearchPipe } from '../../pipes/date-search/date-search.pipe';
import { categorySearchPipe } from '../../pipes/category-search/category-search.pipe';
import { PaymentSearchPipe } from '../../pipes/payment.search/payment-search.pipe';

@Component({
  selector: 'app-transactions',
  imports: [CommonModule,FormsModule,AmountSearchPipe,DateSearchPipe,categorySearchPipe,PaymentSearchPipe],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent implements OnInit{

  constructor(private _trackerServ: TrackerService) {};

  transactionsTable!: Transaction[];
  // variables for search fields
  categorySearch!: string;
  paymentSearch!: string;
  amountSearch?: number;
  dateFromSearch?: Date;
  datetoSearch?: Date;

  ngOnInit(): void {
    this.transactionsTable = this._trackerServ.getTransactions(); // gets all transactions
  }

  clearFilter() {

    this.categorySearch = '';
    this.paymentSearch = '';
    this.amountSearch = undefined;
    this.dateFromSearch = undefined;
    this.datetoSearch = undefined;

  }

}
