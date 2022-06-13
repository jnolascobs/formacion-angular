import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgChartsModule } from 'ng2-charts';

import { FlexLayoutModule } from '@angular/flex-layout';
import { GraphicsRoutingModule } from './graphics-routing.module';
import { GraphMainPageComponent } from './graph-main-page/graph-main-page.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { MaterialModule } from '../material/material.module';
import { DialogChartPokemonComponent } from './dialog-chart-pokemon/dialog-chart-pokemon.component';


@NgModule({
  declarations: [
    GraphMainPageComponent,
    LineChartComponent,
    BarChartComponent,
    DialogChartPokemonComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    GraphicsRoutingModule,
    MaterialModule,
    NgChartsModule
  ]
})
export class GraphicsModule { }
