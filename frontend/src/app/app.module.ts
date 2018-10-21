import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchfrmComponent } from './categories/searchfrm/searchfrm.component';
import { AgmCoreModule } from '@agm/core';
import { GglplcsComponent } from './gglplcs/gglplcs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InfiniteScrollerDirective } from './infinite-scroller.directive';
import {
    MatSliderModule, MatSlideToggleModule, MatCheckboxModule, MatFormFieldModule,
    MatInputModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatListModule,
    MatMenuModule
} from "@angular/material";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CategoriesComponent,
    SearchfrmComponent,
    GglplcsComponent,
    InfiniteScrollerDirective
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
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
