DOC: https://beta.ionicframework.com/

npm install -g ionic

ionic start app blank --type=angular


*** Angular CLI
npm install -g @angular/cli

*** PWA
ng add @angular/pwa --project app
ionic build --prod  --service-worker
npm install -g serve

npm run pwa

DEPLOY:
sudo npm install -g firebase-tools
firebase login
firebase init
firebase use --add

**** Install Capacitor

npm install -g npx

npm install --save @capacitor/cli @capacitor/core
npx cap init [appName] [appId]

Add Platforms

npx cap add ios
npx cap add android

Open IDE to build

npx cap open ios
npx cap open android

Using Ionic Native

npm install your-cordova-plugin
npx cap update

*** Electron
https://angularfirebase.com/lessons/desktop-apps-with-electron-and-angular/
Chaneg: <base href="./"> in index.html and all pages

npm install electron --save-dev

npx cap add electron

cd electron/
npm run electron:start


After any update: npx cap copy

*** Angular Firebase Plugin
npm install firebase @angular/fire --save

*** Google Sign in
npm i @ionic-native/google-plus@^5.0.0-beta
import { GooglePlus } from '@ionic-native/google-plus/npx';
npm install firebase @angular/fire promise-polyfill --save
sudo npm i -g cordova
ionic cordova plugin add cordova-plugin-googleplus --variable REVERSED_CLIENT_ID=com.googleusercontent.apps.534789110521-2mu4etqlb2pu0gc96k5sfenoq95m2uqm --variable WEB_APPLICATION_CLIENT_ID=858749572832-dmuca5airemqai5ruv6nu9rs1jdughfk.apps.googleusercontent.com