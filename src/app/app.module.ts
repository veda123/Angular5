import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TitleCasePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './report-details/header/header.component';
import { AdminPanelComponent } from './report-details/admin-panel/admin-panel.component';
import { LocationComponent } from './report-details/location/location.component';
import { LocationService } from './services/location.service';
import { LocationPocService } from './services/location-poc.service';
import { LocationPipe } from './pipes/location.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [LocationService,LocationPocService],
  bootstrap: [AppComponent]
})
export class AppModule { }
