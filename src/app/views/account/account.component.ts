import { Component, OnInit } from '@angular/core';
import { TransactionService } from './transaction.service';

@Component({
	selector: 'account',
	templateUrl: './account.component.html'
})
export class AccountComponent implements OnInit {

	transactions: [{}];
	doCheck: [boolean]

	constructor(private service: TransactionService) {}

	ngOnInit() {
		this.service.getAllTransactions().subscribe(data => this.transactions = data);
		console.log(this.transactions)
	}
}