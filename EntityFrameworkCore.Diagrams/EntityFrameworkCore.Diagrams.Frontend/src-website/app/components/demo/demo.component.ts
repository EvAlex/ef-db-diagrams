import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { DiagramLayoutService } from '../../../../src/app/services/diagram-layout.service';
import { DbModelLayout } from '../../../../src/app/models/db-model-layout';
import { AppComponent } from '../../../../src/app/components/app/app.component';
import { environment } from '../../../../src/environments/environment';

@Component({
    selector: 'efd-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

    fullscreen = false;

    commitSha = environment.versions.revision;
    commitLink = `${environment.versions.repository}commit/${environment.versions.revision}`;

    @ViewChild('viewInFullscreen')
    viewInFullscreen: ElementRef;

    constructor(private readonly _diagramLayout: DiagramLayoutService) {
    }

    ngOnInit() {
    }

    toggleFullscreen() {
        this.fullscreen = !this.fullscreen;

        for (const modelLayout of this._diagramLayout.getModelLayouts()) {
            modelLayout.showMinimap = this.fullscreen;
        }

        if (!this.fullscreen) {
            setTimeout(() => this.scrollToViewInFullscreen(), 16);
        }
    }

    private scrollToViewInFullscreen() {
        const viewInFullscreen = this.viewInFullscreen.nativeElement as HTMLElement;
        window.document.body.scrollTop = viewInFullscreen.getBoundingClientRect().top - 8;
    }

    onDiagramLoaded(modelLayout: DbModelLayout) {
        modelLayout.showMinimap = this.fullscreen;
    }

}
