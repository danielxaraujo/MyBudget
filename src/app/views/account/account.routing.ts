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
				path: ':id',
				component: AccountComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AccountRoutingModule { }