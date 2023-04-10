import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PrivateRoutingModule } from './private-routing.module';
import { ObjectCardComponent } from './components/object-card/object-card.component';
import { ObjectAddonsComponent } from './components/object-addons/object-addons.component';
import { RegistryComponent } from './components/registry/registry.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { RegistryObjectComponent } from './components/registry-object/registry-object.component';
import { ReportComponent } from './components/report/report.component';
import { NgChartsModule } from 'ng2-charts';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DecisionsComponent } from './components/decisions/decisions.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ObjectCardComponent,
    ObjectAddonsComponent,
    RegistryComponent,
    RegistryObjectComponent,
    ReportComponent,
    DecisionsComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    ReactiveFormsModule,
    NgxDocViewerModule,
    NgChartsModule,
    Ng2SearchPipeModule,
    FormsModule
  ]
})
export class PrivateModule { }
