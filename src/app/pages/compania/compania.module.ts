import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompaniaPageRoutingModule } from './compania-routing.module';

import { CompaniaPage } from './compania.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompaniaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CompaniaPage]
})
export class CompaniaPageModule {}
