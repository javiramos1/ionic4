import { Component } from '@angular/core';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'google-login',
  templateUrl: 'google-login.component.html'
})
export class GoogleLoginComponent {

  user: Observable<firebase.User>;
  name : string;

  constructor(private afAuth: AngularFireAuth, 
              private gplus: GooglePlus,
              private platform: Platform) {

    this.user = this.afAuth.authState;

  }

  googleLogin() {
    if (this.platform.is('cordova')) {
      this.nativeGoogleLogin();
    } else {
      this.webGoogleLogin();
    }
  }
  
  signOut() {
    this.afAuth.auth.signOut();
  }

  async nativeGoogleLogin(){
    try {
  
      const gplusUser = await this.gplus.login({
        'webClientId': '534789110521-l6eb7qfk2gmmaicpsg6dsg9r3g793upv.apps.googleusercontent.com',
        'offline': true,
        'scopes': 'profile email'
      })
  
      this.afAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken))
  
    } catch(err) {
      console.log(err)
    }
  }

  async webGoogleLogin(): Promise<void> {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = await this.afAuth.auth.signInWithPopup(provider);

      console.log(credential);
      this.name = credential.user.displayName;
  
    } catch(err) {
      console.log(err)
    }
  
  }


}