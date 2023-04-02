import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrasesPageRoutingModule } from './frases-routing.module';

import { FrasesPage } from './frases.page';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrasesPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [FrasesPage]
})
export class FrasesPageModule {}
