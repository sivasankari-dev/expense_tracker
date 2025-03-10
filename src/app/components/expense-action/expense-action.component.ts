import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-expense-action',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './expense-action.component.html',
  styleUrl: './expense-action.component.css'
})
export class ExpenseActionComponent {

}
