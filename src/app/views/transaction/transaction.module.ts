import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TransactionComponent } from './transaction.component';
import { TransactionService } from './transaction.service';
import { TransactionRoutingModule } from './transaction.routing';

@NgModule({
	declarations: [TransactionComponent],
	imports: [CommonModule, HttpClientModule, TransactionRoutingModule],
	exports: [TransactionComponent],
	providers: [TransactionService]
})
export class TransactionModule { }