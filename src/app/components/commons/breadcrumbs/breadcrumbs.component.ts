import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import 'rxjs/add/operator/filter';

@Component({
	selector: 'breadcrumbs',
	template: `
	<ol class="breadcrumb">
		<template ngFor let-breadcrumb [ngForOf]="breadcrumbs" let-last = last>
			<li *ngIf="breadcrumb.data.title&&breadcrumb.url.substring(breadcrumb.url.length-1) == '/' || breadcrumb.data.title&&last" [ngClass]="{active: last}">
				<a *ngIf="!last" [routerLink]="breadcrumb.url"><i class="{{breadcrumb.data?.icon ? breadcrumb.data?.icon : ''}}"></i>{{'  ' + breadcrumb.data.title}}</a>
				<strong *ngIf="last"npm>{{breadcrumb.data.title}}</strong>
			</li>
		</template>
	</ol>`
})
export class BreadcrumbsComponent {

    breadcrumbs: Array<Object>;

	constructor(private router: Router, private route: ActivatedRoute) { }

	ngOnInit(): void {
		this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
			this.breadcrumbs = [];
			let currentRoute = this.route.root, url = '';
			do {
				let childrenRoutes = currentRoute.children;
				currentRoute = null;
				childrenRoutes.forEach(route => {
					if (route.outlet === 'primary') {
						let routeSnapshot = route.snapshot;
						url += '/' + routeSnapshot.url.map(segment => segment.path).join('/');
						this.breadcrumbs.push({
							data: route.snapshot.data,
							url: url
						});
						currentRoute = route;
					}
				})
			} while (currentRoute);
		})
	}
}