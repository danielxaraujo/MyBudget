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
	filteredTransactions: Transaction[];
	transactions: Transaction[];

	constructor(private route: ActivatedRoute, private service: TransactionService) {}

	async ngOnInit() {
		this.service.getAllTransactions().subscribe(data => {
			this.transactions = data
			this.paramsSubscription = this.route.params.subscribe(params => {
				let account_id = params['id']
				this.filteredTransactions = this.filterTransactions(account_id)
			});
		});
	}

	filterTransactions(account_id: string) : Transaction[] {
		if (account_id) {
			return this.transactions.filter(item => item.account_id == account_id);
		} else {
			return this.transactions;
		}
	}
}