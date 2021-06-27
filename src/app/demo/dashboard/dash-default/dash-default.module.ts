import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashDefaultRoutingModule } from './dash-default-routing.module';
import { DashDefaultComponent } from './dash-default.component';
import { SharedModule } from '../../../theme/shared/shared.module';
import { BasicElementsModule } from '../../pages/form-elements/basic-elements/basic-elements.module';
import { SamplePageModule } from '../../pages/sample-page/sample-page.module';

@NgModule({
  declarations: [DashDefaultComponent],
  imports: [
    CommonModule,
    DashDefaultRoutingModule,
    SharedModule,
    BasicElementsModule,
    SamplePageModule,
  ]
})
export class DashDefaultModule { }
