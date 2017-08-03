import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../../views/account/account.service';
import { Account } from '../../views/account/account';

declare var jQuery: any;

@Component({
    selector: 'navigation',
    templateUrl: './navigation.component.html'
})
export class NavigationComponent {

	accounts: Account[];

	constructor(private service: AccountService) {}

	ngOnInit() {
		this.service.getAllAccounts().subscribe(data => {
			console.log(data)
			this.accounts = data
		});
	}

    ngAfterViewInit() {
        jQuery('#side-menu').metisMenu();
    }
}