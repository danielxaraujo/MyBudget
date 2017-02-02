import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BreadcrumbsModule } from '../breadcrumbs/breadcrumbs.module';
import { PageHeadingComponent } from './page-heading.component'

@NgModule({
	imports: [CommonModule, RouterModule, BreadcrumbsModule],
	declarations: [PageHeadingComponent],
	exports: [PageHeadingComponent]
})
export class PageHeadingModule { }