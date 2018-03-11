import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {FavoritesPage} from "../pages/favorites/favorites";
import {QuotesPage} from "../pages/quotes/quotes";
import {QuotePage} from "../pages/quote/quote";
import {LibaryPage} from "../pages/libary/libary";
import {SettingsPage} from "../pages/settings/settings";
import {TabsPage} from "../pages/tabs/tabs";
import {QuotesService} from "../services/quotes";
import {SettingsService} from "../services/settings";

@NgModule({
  declarations: [
    MyApp,
    FavoritesPage,
    QuotesPage,
    QuotePage,
    LibaryPage,
    SettingsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavoritesPage,
    QuotesPage,
    QuotePage,
    LibaryPage,
    SettingsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuotesService,
    SettingsService
  ]
})
export class AppModule {}

