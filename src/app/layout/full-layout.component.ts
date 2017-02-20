import { Component } from '@angular/core';

@Component({
    selector: 'full-layout',
    template: `
        <div id="wrapper">
            <navigation></navigation>
            <div id="page-wrapper" class="gray-bg">
                <topnavbar></topnavbar>
                <router-outlet></router-outlet>
                <footer></footer>
            </div>
        </div>`
})
export class FullLayoutComponent { }