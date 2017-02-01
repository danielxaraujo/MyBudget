import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreadcrumbsComponent } from './breadcrumbs.component';

@NgModule({
	imports: [ CommonModule, RouterModule ],
	declarations: [BreadcrumbsComponent],
	exports: [ BreadcrumbsComponent],
	schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class BreadcrumbsModule { }