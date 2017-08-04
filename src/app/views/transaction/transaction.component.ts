import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { TransactionService } from './transaction.service';
import { Transaction } from './transaction';

@Component({
	selector: 'transaction',
	templateUrl: './transaction.component.html'
})
export class TransactionComponent implements OnInit {

	paramsSubscription: Subscription;
	transactions: Transaction[];
	doCheck: boolean[];
	account_id: string;

	constructor(private route: ActivatedRoute,
				private service: TransactionService) {}

	ngOnInit() {
		this.service.getAllTransactions().subscribe(data => {
			this.transactions = data
			console.log(this.filteredTransactions());
		});
		this.paramsSubscription = this.route.params.subscribe(params => {
			this.account_id = params['id'];
		});
	}

	filteredTransactions() : Transaction[] {
		if (this.account_id) {
			let array = this.transactions.map((value: Transaction, index: number, array: Transaction[]) => {
				return value.account_id == this.account_id ? value : null;
			});
			console.log(array);
			return array;
		} else {
			return this.transactions;
		}
	}

	ngOnDestroy() {
		this.paramsSubscription.unsubscribe();
	}
}