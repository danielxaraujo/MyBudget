import { Component, OnInit } from '@angular/core';
import { TransactionService } from './transaction.service';
import { Transaction } from './transaction';

@Component({
	selector: 'account',
	templateUrl: './account.component.html'
})
export class AccountComponent implements OnInit {

	transactions: [Transaction];

	constructor(private service: TransactionService) {}

	ngOnInit() {
		this.service.getAllTransactions().subscribe(data => {
			this.transactions = data;
			for(let i = 0; i < this.transactions.length; i++) {
				this.transactions[i].selected = false;
			}
			console.log(this.transactions);
		});
	}
}