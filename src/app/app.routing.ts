import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { FullLayoutComponent } from './components/layout/layout.module';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'dashboard',
		pathMatch: 'full'
	},
	{
		path: '',
		component: FullLayoutComponent,
		data: {
			title: 'Home'
		},
		children: [
			{
				path: 'dashboard',
				loadChildren: './views/dashboard/dashboard.module#DashboardModule'
			},
			{
				path: 'budget',
				loadChildren: './views/budget/budget.module#BudgetModule'
			}
		]
	},
	{
		path: '**',
		redirectTo: 'dashboard',
		pathMatch: 'full'
	}
]

@NgModule({
	imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
	exports: [RouterModule]
})
export class AppRoutingModule { }