import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar';
import { FooterComponent } from './footer';
import { HomeComponent } from './home';
import { CategoriesComponent } from './categories';
import { AppRoutingModule } from './app-routing.module';
import { SearchfrmComponent } from './categories/searchfrm';
import { AgmCoreModule } from '@agm/core';
import { GglplcsComponent } from './gglplcs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InfiniteScrollerDirective } from './_directives';
import {
    MatSliderModule, MatSlideToggleModule, MatCheckboxModule, MatFormFieldModule,
    MatInputModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatListModule,
    MatMenuModule, MatButtonModule, MatGridListModule
} from "@angular/material";
import { LoginComponent } from './login';
import {fakeBackendProvider} from "./_helpers/fake-backend";
import {ErrorInterceptor} from "./_helpers";
import {JwtInterceptor} from "./_helpers";
import {BackendService} from "./_services";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CategoriesComponent,
    SearchfrmComponent,
    GglplcsComponent,
    InfiniteScrollerDirective,
    LoginComponent
  ],
  imports: [
      AgmCoreModule.forRoot({
          //apiKey: "AIzaSyDviOSCqGI5VGN8kP4ltqtxt930uMh5vKg",
          libraries: ["places"]
      }),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatSliderModule,
    MatIconModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    BackendService
    // provider used to create fake backend
    //fakeBackendProvider
],
  bootstrap: [AppComponent]
})
export class AppModule { }
