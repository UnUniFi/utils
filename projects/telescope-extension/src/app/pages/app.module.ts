import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingDialogModule } from 'ng-loading-dialog';
import { HomeModule } from 'projects/telescope-extension/src/app/views/home/home.module';
import { KeySelectDialogModule } from 'projects/telescope-extension/src/app/views/keys/key-select-dialog/key-select-dialog.module';
import { ToolbarModule } from 'projects/telescope-extension/src/app/views/toolbar/toolbar.module';
import { ViewModule } from 'projects/telescope-extension/src/app/views/view.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    LoadingDialogModule,
    MatDialogModule,
    MatSnackBarModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ViewModule,
    HomeModule,
    ToolbarModule,
    KeySelectDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
