import { Component } from '@angular/core';
import { BalanceComponent } from '../../components/balance/balance.component';
import { TransactionsComponent } from '../../components/transactions/transactions.component';

@Component({
  selector: 'app-summary',
  imports: [BalanceComponent,TransactionsComponent],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent {

}
