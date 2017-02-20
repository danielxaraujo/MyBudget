import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class TransactionService {

	private url: string = 'http://127.0.0.1:3000/api/transaction/all'

	constructor(private http: Http) {}

	getAllTransactions() : Observable<[{}]> {
		return this.http.get(this.url).map((res: Response) => res.json().data);
	}
}