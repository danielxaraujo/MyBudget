import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { BreadcrumbsComponent } from './breadcrumbs.component';

@NgModule({
	imports: [ CommonModule ],
	declarations: [BreadcrumbsComponent],
	exports: [ BreadcrumbsComponent, CommonModule, Router, ActivatedRoute, NavigationEnd]
})
export class BreadcrumbsModule { }