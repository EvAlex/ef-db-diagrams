import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/timer';

import 'hammerjs';

import { AppComponent } from './components/app/app.component';
import { DbDiagramComponent } from './components/db-diagram/db-diagram.component';
import { ApiService } from './services/api.service';
import { DbEntityDiagramFigureComponent } from './components/db-entity-diagram-figure/db-entity-diagram-figure.component';
import { ClrTypeComponent } from './components/clr-type/clr-type.component';
import { ScalableDirective } from './directives/scalable.directive';

@NgModule({
    declarations: [
        AppComponent,
        DbDiagramComponent,
        DbEntityDiagramFigureComponent,
        ClrTypeComponent,
        ScalableDirective
    ],
    imports: [
        BrowserModule,
        HttpModule,
        BrowserAnimationsModule,
        MaterialModule,
        CdkTableModule
    ],
    providers: [ApiService],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
