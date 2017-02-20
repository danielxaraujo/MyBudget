import { NgModule } from '@angular/core';

import { AccountComponent } from './account.component';
import { AccountRoutingModule } from './account-routing.module';
import { SharedModule } from "../../shared/shared.module";

@NgModule({
	declarations: [AccountComponent],
	imports: [AccountRoutingModule, SharedModule]
})
export class AccountModule { }