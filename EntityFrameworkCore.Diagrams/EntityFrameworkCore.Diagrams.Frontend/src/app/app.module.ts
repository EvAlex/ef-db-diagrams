import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/timer';

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
    ],
    imports: [
        BrowserModule,
        HttpModule,
        BrowserAnimationsModule,
        MaterialModule,
        CdkTableModule
    ],
    providers: [ApiService, DiagramLayoutService],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
