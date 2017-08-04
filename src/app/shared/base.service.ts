import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

export class BaseService<T> {

	private baseUrl: string = 'http://127.0.0.1:3000/api/';

	constructor(protected http: HttpClient) {}

	protected getById(id : string, subUrl: string) : Observable<T> {
		let url : string = this.baseUrl + subUrl
		return this.http.get<T>(this.baseUrl);
	}

	protected getAll(subUrl: string) : Observable<T[]> {
		let url : string = this.baseUrl + subUrl
		return this.http.get<T[]>(url);
	}
}