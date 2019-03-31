import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { OncoscapeComponent } from './oncoscape/oncoscape.component';
import { SttrComponent } from './sttr/sttr.component';
import { MouseAtlasComponent } from './mouse-atlas/mouse-atlas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatMenuModule,
  MatIconModule,
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent, 
    MainComponent, 
    OncoscapeComponent, 
    SttrComponent, 
    MouseAtlasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatIconModule,
    FlexLayoutModule,
    AppRoutingModule
    

  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
