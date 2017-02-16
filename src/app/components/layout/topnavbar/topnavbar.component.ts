import { Component } from '@angular/core';
import { smoothlyMenu } from '../../../app.helpers';
declare var jQuery: any;

@Component({
    selector: 'topnavbar',
    templateUrl: './topnavbar.component.html'
})
export class TopnavbarComponent {
    toggleNavigation(): void {
        jQuery("body").toggleClass("mini-navbar");
        smoothlyMenu();
    }
}