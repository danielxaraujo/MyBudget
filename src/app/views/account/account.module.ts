import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AccountComponent } from './account.component';
import { AccountService } from './account.service';
import { TransactionService } from './transaction.service';
import { AccountRoutingModule } from './account.routing';

@NgModule({
	declarations: [AccountComponent],
	imports: [CommonModule, HttpClientModule, AccountRoutingModule],
	exports: [AccountComponent],
	providers: [ AccountService, TransactionService ]
})
export class AccountModule { }