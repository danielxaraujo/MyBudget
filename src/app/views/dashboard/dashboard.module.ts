import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { BreadcrumbsModule } from '../../components/commons/breadcrumbs/breadcrumbs,.module';

@NgModule({
	declarations: [DashboardComponent],
	imports: [DashboardRoutingModule, BreadcrumbsModule]
})
export class DashboardModule { }