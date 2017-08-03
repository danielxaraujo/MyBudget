import { NgModule } from '@angular/core';

import { BudgetComponent } from './budget.component';
import { BudgetRoutingModule } from './budget-routing.module';

@NgModule({
	declarations: [BudgetComponent],
	imports: [BudgetRoutingModule]
})
export class BudgetModule { }