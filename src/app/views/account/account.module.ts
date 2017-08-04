import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AccountComponent } from './account.component';
import { AccountService } from './account.service';
import { AccountRoutingModule } from './account.routing';

@NgModule({
	declarations: [AccountComponent],
	imports: [CommonModule, RouterModule, HttpClientModule, AccountRoutingModule],
	exports: [AccountComponent],
	providers: [AccountService]
})
export class AccountModule { }