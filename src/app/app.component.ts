import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';


import { HomePage } from '../pages/home/home';
import {SigninPage} from "../pages/signin/signin";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyA2DiNYHGg2pQBXWfrsJx15a_5JSeP8_Og",
  authDomain: "correct-e6c78.firebaseapp.com",
  databaseURL: "https://correct-e6c78.firebaseio.com",
  projectId: "correct-e6c78",
  storageBucket: "correct-e6c78.appspot.com",
  messagingSenderId: "162925262191"
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SigninPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}

