import { Component } from '@angular/core';
import { correctHeight, detectBody } from './app.helpers';

declare var jQuery: any;

@Component({
	selector: 'app-root',
	template: '<router-outlet></router-outlet>'
})
export class AppComponent {

	ngAfterViewInit() {

		// Run correctHeight function on load and resize window event
		jQuery(window).bind("load resize", function() {
			correctHeight();
			detectBody();
		});

		// Correct height of wrapper after metisMenu animation.
		jQuery('.metismenu a').click(() => {
			setTimeout(() => {
				correctHeight();
			}, 300)
		});
	}
}