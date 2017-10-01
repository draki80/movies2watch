import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicStorageModule  } from '@ionic/storage';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { MovieListPage } from '../pages/movieList/movieList';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PeoplePage } from '../pages/people/people';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MoviesProvider } from '../providers/movies/movies';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    MovieListPage,
    ContactPage,
    HomePage,
    TabsPage,
    PeoplePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot(
      {
      name: 'myApp',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }
    ),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MovieListPage,
    ContactPage,
    HomePage,
    TabsPage,
    PeoplePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MoviesProvider
  ]
})
export class AppModule {}
