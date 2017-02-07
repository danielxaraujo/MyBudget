import { Component } from '@angular/core';
import { Router } from '@angular/router';

declare var jQuery: any;

@Component({
    selector: 'navigation',
    templateUrl: './navigation.component.html'
})
export class NavigationComponent {

    ngAfterViewInit() {
        jQuery('#side-menu').metisMenu();
    }
}