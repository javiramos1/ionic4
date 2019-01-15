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
Chaneg: <base href="./"> in index.html

npm install electron --save-dev

npx cap add electron

cd electron/
npm run electron:start


After any update: npx cap copy
