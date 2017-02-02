import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { PageHeadingModule } from "../../components/commons/page-heading/page-heading.module";

@NgModule({
	declarations: [DashboardComponent],
	imports: [DashboardRoutingModule, PageHeadingModule]
})
export class DashboardModule { }