import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuizzSettingsPage } from './quizz-settings';

@NgModule({
  declarations: [
    QuizzSettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(QuizzSettingsPage),
  ],
})
export class QuizzSettingsPageModule {}
