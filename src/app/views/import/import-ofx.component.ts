import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FileUploader, FileItem, ParsedResponseHeaders } from 'ng2-file-upload';

const URL = 'http://127.0.0.1:3000/api/import/ofx';

@Component({
	selector: 'app-import-ofx',
	templateUrl: './import-ofx.component.html',
})
export class ImportOfxComponent implements OnInit {

	isLoading: boolean = false
	progress: number = 0;
	uploader: FileUploader = new FileUploader({ url: URL });
	hasBaseDropZoneOver: boolean = false;

	constructor(private detector: ChangeDetectorRef) { }

	ngOnInit() {

		this.uploader.onCompleteItem = (item: FileItem, response: string, status: number, headers: ParsedResponseHeaders) => {
			item.progress = 100;
		};

		this.uploader.onProgressItem = (fileItem: FileItem, progress: any) => {
			this.progress = progress;
			this.detector.detectChanges()
		};
	}

	public fileOver(e: any): void {
		this.hasBaseDropZoneOver = e;
	}
}