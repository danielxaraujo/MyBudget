import { Component } from '@angular/core';

declare var jQuery: any;

@Component({
    selector: 'basic-layout',
    template: '<router-outlet></router-outlet>'
})
export class BasicLayoutComponent {

    ngAfterViewInit() {
        jQuery('body').addClass('gray-bg');
    }

    ngOnDestroy() {
        jQuery('body').removeClass('gray-bg');
    }
}