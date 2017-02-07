import { NgModule } from '@angular/core';

import { BudgetComponent } from './budget.component';
import { BudgetRoutingModule } from './budget-routing.module';
import { PageHeadingModule } from "../../components/commons/page-heading/page-heading.module";

@NgModule({
	declarations: [BudgetComponent],
	imports: [BudgetRoutingModule, PageHeadingModule]
})
export class BudgetModule { }