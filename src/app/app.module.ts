import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//import { DataServicesService } from './app/services/data-service.service;

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TitleHeaderPageModule} from '../pages/title-header/title-header.module';
import { TitleHeaderPage} from '../pages/title-header/title-header';
import { PseudoPageModule } from '../pages/pseudo/pseudo.module';
import { PseudoPage } from '../pages/pseudo/pseudo';
import { QuizzSettingsPage } from '../pages/quizz-settings/quizz-settings';
import { QuizzSettingsPageModule } from '../pages/quizz-settings/quizz-settings.module';



@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    TitleHeaderPageModule,
    PseudoPageModule,
    QuizzSettingsPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TitleHeaderPage,
    PseudoPage,
    QuizzSettingsPage
  ],
  providers: [
    //DataService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
