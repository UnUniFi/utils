import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { DocsComponent } from './docs/docs.component';
import { ViewModule } from '@view/view.module';
import { HomeModule } from '@view/home/home.module';
import { DocsModule } from '@view/docs/docs.module';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { LoadingDialogModule } from 'ng-loading-dialog';
import { MaterialModule } from '@view/material.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, DocsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireFunctionsModule,
    LoadingDialogModule,
    MaterialModule,
    ViewModule,
    HomeModule,
    DocsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
