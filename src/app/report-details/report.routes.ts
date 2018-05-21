import { Routes } from '@angular/router';
import { LocationComponent } from './location/location.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { LocationPointOfContactComponent } from './location-point-of-contact/location-point-of-contact.component';
import { AddLocationComponent } from './location/add-location/add-location.component';
import { DeleteLocationComponent } from './location/delete-location/delete-location.component';

export const ROUTES: Routes = [
  {path : '', component: AdminPanelComponent, children: [
    {path : 'location', component: LocationComponent},
    {path : 'locationPOC', component: LocationPointOfContactComponent},
    {path : 'location/new', component:AddLocationComponent},
    {path : 'location/delete/:id', component:DeleteLocationComponent}
  ]}
];
