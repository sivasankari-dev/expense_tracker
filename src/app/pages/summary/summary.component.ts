import { Component } from '@angular/core';
import { BalanceComponent } from '../../components/balance/balance.component';

@Component({
  selector: 'app-summary',
  imports: [BalanceComponent],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent {

}
