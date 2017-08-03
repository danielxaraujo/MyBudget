import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import { BaseService } from '../../shared/base.service';
import { Transaction } from './transaction';

@Injectable()
export class TransactionService extends BaseService<Transaction>  {

	constructor(http: HttpClient) {
		super(http)
	}

	getTransactionsByAccountId(accountId: String) : Observable<Transaction[]> {
		return this.getAll('transaction/account/'+ accountId);
	}
}