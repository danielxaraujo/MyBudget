import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImportOfxComponent } from './import-ofx.component';

const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'ofx',
				component: ImportOfxComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ImportRoutingModule { }