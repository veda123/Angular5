import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './report-details/header/header.component';
import { AdminPanelComponent } from './report-details/admin-panel/admin-panel.component';
import { LocationComponent } from './report-details/location/location.component';

export const ROUTES: Routes = [
  {path : '', redirectTo: '/login', pathMatch: 'full'},
  {path : 'login', component: LoginComponent},
  {path : 'admin', loadChildren: 'app/report-details/report.module#ReportModule'}
];
