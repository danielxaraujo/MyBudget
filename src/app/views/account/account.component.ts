import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

import { AccountService } from './account.service';
import { Account } from './account';

@Component({
	selector: '[account]',
	templateUrl: './account.component.html'
})
export class AccountComponent implements OnInit {

	accounts: Account[];

	constructor(private service: AccountService) {}

	ngOnInit() {
		this.service.getAllAccounts().subscribe(data => {
			this.accounts = data
		});
	}
}