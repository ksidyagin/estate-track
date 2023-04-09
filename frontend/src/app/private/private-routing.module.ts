import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ObjectCardComponent } from './components/object-card/object-card.component';
import { ObjectAddonsComponent } from './components/object-addons/object-addons.component';
import { RegistryComponent } from './components/registry/registry.component';
import { RegistryObjectComponent } from './components/registry-object/registry-object.component';
import { ReportComponent } from './components/report/report.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'object-card/:id',
    component: ObjectCardComponent
  },
  {
    path: 'object-addons/:id',
    component: ObjectAddonsComponent
  },
  {
    path: 'registry',
    component: RegistryComponent
  },
  {
    path: 'registry-object/:id',
    component: RegistryObjectComponent
  },
  {
    path: 'report',
    component: ReportComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }