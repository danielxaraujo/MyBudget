import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { FooterComponent } from "./components/commons/footer/footer.component";
import { NavigationComponent } from "./components/commons/navigation/navigation.component";
import { TopnavbarComponent } from "./components/commons/topnavbar/topnavbar.component";
import { BreadcrumbsModule } from "./components/commons/breadcrumbs/breadcrumbs.module";

@NgModule({
	declarations: [
		AppComponent,
		FooterComponent,
		NavigationComponent,
		TopnavbarComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		RouterModule,
		CommonModule,
		AppRoutingModule,
		BreadcrumbsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }