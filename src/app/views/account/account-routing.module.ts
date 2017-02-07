import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './account.component';

const routes: Routes = [
	{
		path: '',
		data: {
			title: 'Conta'
		},
		children: [
			{
				path: '1',
				component: AccountComponent,
				data: {
					title: 'Conta Corrente BB'
				}
			},
			{
				path: '2',
				component: AccountComponent,
				data: {
					title: 'Cartão de Crédito BB'
				}
			},
			{
				path: '3',
				component: AccountComponent,
				data: {
					title: 'Poupança BB'
				}
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AccountRoutingModule { }