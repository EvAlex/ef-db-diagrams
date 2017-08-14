import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/debounce';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/fromEvent';

import 'hammerjs';

import { AppComponent } from './components/app/app.component';
import { DbDiagramComponent } from './components/db-diagram/db-diagram.component';
import { ApiService } from './services/api.service';
import { DiagramLayoutService } from './services/diagram-layout.service';
import { DbEntityDiagramFigureComponent } from './components/db-entity-diagram-figure/db-entity-diagram-figure.component';
import { ClrTypeComponent } from './components/clr-type/clr-type.component';
import { ScalableDirective } from './directives/scalable.directive';
import { DbRelationConnectorComponent } from './components/db-relation-connector/db-relation-connector.component';
import { DraggableDirective } from './directives/draggable.directive';
import { ScalingToolbarComponent } from './components/scaling-toolbar/scaling-toolbar.component';
import { MouseEdgePanDirective } from './directives/mouse-edge-pan.directive';
import { MinimapComponent } from './components/minimap/minimap.component';
import { ScrollbarWidthDirective } from './directives/scrollbar-width.directive';
import { DownloadDataDirective } from './directives/download-data.directive';
import { ExportDialogComponent } from './components/export-dialog/export-dialog.component';
import { DevicemotionScrollDirective } from './directives/devicemotion-scroll.directive';

@NgModule({
    declarations: [
        AppComponent,
        DbDiagramComponent,
        DbEntityDiagramFigureComponent,
        ClrTypeComponent,
        ScalableDirective,
        DbRelationConnectorComponent,
        DraggableDirective,
        ScalingToolbarComponent,
        MouseEdgePanDirective,
        MinimapComponent,
        ScrollbarWidthDirective,
        DownloadDataDirective,
        ExportDialogComponent,
        DevicemotionScrollDirective,
    ],
    entryComponents: [ExportDialogComponent],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        BrowserAnimationsModule,
        MaterialModule,
        CdkTableModule
    ],
    providers: [ApiService, DiagramLayoutService],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [
        AppComponent
    ]
})
export class DbDiagramsAppModule {
}
