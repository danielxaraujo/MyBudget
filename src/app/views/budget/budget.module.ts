import { NgModule } from '@angular/core';

import { BudgetComponent } from './budget.component';
import { BudgetRoutingModule } from './budget-routing.module';
import { SharedModule } from "../../shared/shared.module";

@NgModule({
	declarations: [BudgetComponent],
	imports: [BudgetRoutingModule, SharedModule]
})
export class BudgetModule { }