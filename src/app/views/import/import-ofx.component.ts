import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

const URL = 'http://127.0.0.1:3000/api/import/ofx';

@Component({
	selector: 'app-import-ofx',
	templateUrl: './import-ofx.component.html',
})
export class ImportOfxComponent implements OnInit {

	uploader: FileUploader = new FileUploader({ url: URL });
	hasBaseDropZoneOver: boolean = false;

	constructor() { }

	ngOnInit() {
	}

	public fileOverBase(e: any): void {
		this.hasBaseDropZoneOver = e;
	}
}