import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation.component';
import { NavigationItemComponent } from './navigation-item/navigation-item.component';

@NgModule({
	imports: [CommonModule, RouterModule],
	declarations: [NavigationComponent, NavigationItemComponent],
	exports: [NavigationComponent]
})
export class NavigationModule { }