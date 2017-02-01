import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs.component';

@NgModule({
	declarations: [BreadcrumbsComponent],
	imports: [BrowserModule, RouterModule, CommonModule],
	exports: [BreadcrumbsComponent, BrowserModule, RouterModule, CommonModule]
})
export class BreadcrumbsModule { }