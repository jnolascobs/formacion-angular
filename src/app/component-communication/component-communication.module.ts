import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ChildComponent } from './child/child.component';
import { CommunicationComponent } from './communication/communication.component';
import { ParentComponent } from './parent/parent.component';


@NgModule({
  declarations: [
    CommunicationComponent,
    ChildComponent,
    ParentComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class ComponentCommunicationModule { }
