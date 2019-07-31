import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import * as firebase from 'firebase';

firebase.initializeApp({
  piKey: "AIzaSyC0rQZ5mDHZggFt9BXOpgCIjcjp-qYn8uM",
    authDomain: "smsverification-69c17.firebaseapp.com",
    databaseURL: "https://smsverification-69c17.firebaseio.com",
    projectId: "smsverification-69c17",
    storageBucket: "",
    messagingSenderId: "945659108511",
    appId: "1:945659108511:web:e008183aa4e74474"
})

// xport const installfirebaseConfig = 
// { apiKey: "AIzaSyC0rQZ5mDHZggFt9BXOpgCIjcjp-qYn8uM",
//     authDomain: "smsverification-69c17.firebaseapp.com",
//     databaseURL: "https://smsverification-69c17.firebaseio.com",
//     projectId: "smsverification-69c17",
//     storageBucket: "",
//     messagingSenderId: "945659108511",
//     appId: "1:945659108511:web:e008183aa4e74474"
// };

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
