import { Directive, ElementRef, HostBinding, Input, OnInit, OnChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Directive({
    selector: 'a[efdDownloadData]'
})
export class DownloadDataDirective implements OnInit, OnChanges {
    private _blob: Blob = null;
    private _url: string = null;

    @Input()
    efdDownloadData;

    @Input('efdDownloadFilename')
    @HostBinding('download')
    efdDownloadFilename = 'data.json';

    @HostBinding('href')
    href;

    constructor(private readonly _el: ElementRef, private readonly _sanitizer: DomSanitizer) {
    }

    ngOnInit() {
    }

    ngOnChanges() {
        if (this._url !== null) {
            window.URL.revokeObjectURL(this._url);
        }
        const json = JSON.stringify(this.efdDownloadData);
        this._blob = new Blob([json], { type: 'application/json' });
        this._url = window.URL.createObjectURL(this._blob);

        this.href = this._sanitizer.bypassSecurityTrustUrl(this._url);
    }

}
