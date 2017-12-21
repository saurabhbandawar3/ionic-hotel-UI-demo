import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {SigninPage}from '../pages/signin/signin';
import {SignupPage} from "../pages/signup/signup";
import {SignupdataPage} from "../pages/signupdata/signupdata";
import {PlayVideoPage} from "../pages/play-video/play-video";
import { ModalViewPage} from "../pages/modal-view/modal-view";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SigninPage,
    SignupPage,
    SignupdataPage,
    PlayVideoPage,
    ModalViewPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SigninPage,
    SignupPage,
    SignupdataPage,
    PlayVideoPage,
    ModalViewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
