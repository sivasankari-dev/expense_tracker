import { Routes } from '@angular/router';
import { SummaryComponent } from './pages/summary/summary.component';
import { ReportComponent } from './pages/report/report.component';
import { BudgetComponent } from './pages/budget/budget.component';
import { NewTransactionComponent } from './pages/new-transaction/new-transaction.component';

export const routes: Routes = [
    {path:"",redirectTo:'summary',pathMatch:'full'},
    {path:"summary",component:SummaryComponent,title:'Summary'},
    {path:"report",component:ReportComponent,title:'Report'},
    {path:"budget",component:BudgetComponent,title:'Budget'},
    {path:"newtransaction",component:NewTransactionComponent,title:'New Transaction'},
];
