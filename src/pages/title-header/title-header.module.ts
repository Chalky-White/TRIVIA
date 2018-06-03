import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TitleHeaderPage } from './title-header';

@NgModule({
  declarations: [
    TitleHeaderPage,
  ],
  imports: [
    IonicPageModule.forChild(TitleHeaderPage),
  ],
})
export class TitleHeaderPageModule {}
