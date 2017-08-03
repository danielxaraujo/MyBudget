import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import { BaseService } from '../../shared/base.service';
import { Account } from './account';

@Injectable()
export class AccountService extends BaseService<Account> {

	constructor(http: HttpClient) {
		super(http)
	}

	getAllAccounts() : Observable<Account[]> {
		return this.getAll('account/all');
	}
}