import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MdButtonModule,
    MdToolbarModule,
    MdListModule
} from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { GettingStartedComponent } from './components/getting-started/getting-started.component';
import { GuidesComponent } from './components/guides/guides.component';
import { MarkdownDirective } from './directives/markdown.directive';
import { SyntaxHighlightDirective } from './directives/syntax-highlight.directive';
import { FooterComponent } from './components/footer/footer.component';
import { DemoComponent } from './components/demo/demo.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomepageComponent,
        GettingStartedComponent,
        GuidesComponent,
        MarkdownDirective,
        SyntaxHighlightDirective,
        FooterComponent,
        DemoComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebase),
        MdButtonModule,
        MdToolbarModule,
        MdListModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
