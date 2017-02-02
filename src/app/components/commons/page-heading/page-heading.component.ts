import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'page-heading',
	templateUrl: './page-heading.component.html'
})
export class PageHeadingComponent implements OnInit {

	pageHeading: {};

	constructor(private route: ActivatedRoute) {}

    ngOnInit() {
		this.pageHeading = this.route.snapshot.data;
    }
}