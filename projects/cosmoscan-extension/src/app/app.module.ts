import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoadingDialogModule } from 'ng-loading-dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './home/home.component';
import { ViewModule } from '@view-ce/view.module';
import { HomeModule } from '@view-ce/home/home.module';
import { ToolbarModule } from '@view-ce/toolbar/toolbar.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    LoadingDialogModule,
    MatDialogModule,
    MatSnackBarModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ViewModule,
    HomeModule,
    ToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
