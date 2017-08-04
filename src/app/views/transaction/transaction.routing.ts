import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionComponent } from './transaction.component';

const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'all',
				component: TransactionComponent
			},
			{
				path: ':id',
				component: TransactionComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TransactionRoutingModule { }