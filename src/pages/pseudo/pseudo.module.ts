import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PseudoPage } from './pseudo';

@NgModule({
  declarations: [
    PseudoPage,
  ],
  imports: [
    IonicPageModule.forChild(PseudoPage),
  ],
})
export class PseudoPageModule {}
