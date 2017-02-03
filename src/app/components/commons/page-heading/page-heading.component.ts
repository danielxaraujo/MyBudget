import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'page-heading',
	template: `
		<div class="row wrapper border-bottom white-bg page-heading">
			<div class="col-lg-10">
				<h2>{{ pageHeading?.title }}</h2>
				<breadcrumbs></breadcrumbs>
			</div>
		</div>`
})
export class PageHeadingComponent implements OnInit {

	pageHeading: {};

	constructor(private route: ActivatedRoute) { }

    ngOnInit() {
		this.pageHeading = this.route.snapshot.data;
    }
}