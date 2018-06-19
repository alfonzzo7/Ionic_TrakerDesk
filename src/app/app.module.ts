import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//Maps
import { AgmCoreModule } from '@agm/core';

//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAU9gZ1W9Wo22LHyVq_Dcx7g9ix8lJT33g'
    }),
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyBZb3MkhN4bDEConUQwRxms8mFc_jEqzAo',
      authDomain: 'trackertaxis.firebaseapp.com',
      databaseURL: 'https://trackertaxis.firebaseio.com',
      projectId: 'trackertaxis',
      storageBucket: 'trackertaxis.appspot.com',
      messagingSenderId: '117646870934'
    }),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
