import { NgModule } from '@angular/core';

import { AccountComponent } from './account.component';
import { AccountRoutingModule } from './account-routing.module';
import { PageHeadingModule } from "../../components/commons/page-heading/page-heading.module";

@NgModule({
	declarations: [AccountComponent],
	imports: [AccountRoutingModule, PageHeadingModule]
})
export class AccountModule { }