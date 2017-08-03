import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { TransactionService } from './transaction.service';
import { Transaction } from './transaction';

@Component({
	selector: 'account',
	templateUrl: './account.component.html'
})
export class AccountComponent implements OnInit {

	paramsSubscription: Subscription;
	transactions: Transaction[];
	doCheck: boolean[];

	constructor(private route: ActivatedRoute,
				private service: TransactionService) {}

	ngOnInit() {
		this.paramsSubscription = this.route.params.subscribe((params: any) => {
				const account_id = params['id'];
				this.service.getTransactionsByAccountId(account_id).subscribe(data => {
					this.transactions = data
				});
			}
		);
	}

	ngOnDestroy() {
		this.paramsSubscription.unsubscribe();
	}
}