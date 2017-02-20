import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BreadcrumbsComponent } from './breadcrumbs.component';
import { PageHeadingComponent } from './page-heading.component'

@NgModule({
	imports: [CommonModule, RouterModule],
	declarations: [PageHeadingComponent, BreadcrumbsComponent],
	exports: [PageHeadingComponent, BreadcrumbsComponent]
})
export class SharedModule { }

export { PageHeadingComponent, BreadcrumbsComponent }