import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';

import { ImportOfxComponent } from './import-ofx.component';
import { ImportRoutingModule } from './import.routing';

@NgModule({
	declarations: [ImportOfxComponent, FileDropDirective, FileSelectDirective],
	imports: [CommonModule, RouterModule, HttpClientModule, ImportRoutingModule],
	exports: [ImportOfxComponent, FileDropDirective]
})
export class ImportModule { }