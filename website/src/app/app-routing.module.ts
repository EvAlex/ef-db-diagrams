import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { GuidesComponent } from './components/guides/guides.component';
import { GettingStartedComponent } from './components/getting-started/getting-started.component';

const routes: Routes = [
    {
        path: '',
        component: HomepageComponent,
        children: []
    },
    {
        path: 'guides',
        component: GuidesComponent,
        children: []
    },
    {
        path: 'guides/getting-started',
        component: GettingStartedComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
