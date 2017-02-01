import { NgModule, ModuleWithProviders } from '@angular/core';
import { BreadcrumbsComponent } from './breadcrumbs.component';

@NgModule({
	declarations: [BreadcrumbsComponent],
	exports: [BreadcrumbsComponent]
})
export class BreadcrumbsModule {
	public static forRoot(): ModuleWithProviders {
		return {
			ngModule: BreadcrumbsModule,
			providers: []
		};
	}
}