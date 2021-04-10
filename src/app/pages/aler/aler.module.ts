import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlerPageRoutingModule } from './aler-routing.module';

import { AlerPage } from './aler.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlerPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AlerPage]
})
export class AlerPageModule {}
