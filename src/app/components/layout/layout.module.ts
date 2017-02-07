import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { BasicLayoutComponent } from './basic-layout.component';
import { FullLayoutComponent } from './full-layout.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationItemComponent } from './navigation/navigation-item/navigation-item.component';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';

export { BasicLayoutComponent, FullLayoutComponent }

@NgModule({
    declarations: [
        BasicLayoutComponent,
        FullLayoutComponent,
        FooterComponent,
        NavigationComponent,
        NavigationItemComponent,
        TopnavbarComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        BrowserModule],
    exports: [
        BasicLayoutComponent,
        FullLayoutComponent
    ]
})
export class LayoutModule { }