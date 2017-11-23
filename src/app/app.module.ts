import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { LlistatCompraService } from '../services/llistat.service'
import { GlobalHelper } from "../pages/helpers/global.helper";
import { LlistatPage } from '../pages/llistat/llistat';
import { ProductesPage } from '../pages/productes/productes';
import { ArchiuComponent } from '../pages/archiu/archiu';

@NgModule({
  declarations: [
    MyApp,
    LlistatPage,
    ProductesPage,
    ArchiuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      menuType: 'push',
      platforms: {
        ios: {
          menuType: 'overlay',
        }
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LlistatPage,
    ProductesPage,
    ArchiuComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LlistatCompraService,
    GlobalHelper,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
