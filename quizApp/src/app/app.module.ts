import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import 'hammerjs';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './signing/login/login.component';
import { SignInComponent } from './signing/sign-in/sign-in.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, QuestionComponent, HeaderComponent, LoginComponent, SignInComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule {}
