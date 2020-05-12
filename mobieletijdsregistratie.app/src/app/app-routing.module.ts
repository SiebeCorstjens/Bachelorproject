import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonListComponent } from './person-list/person-list.component';
import { RegistrationListComponent } from './registration-list/registration-list.component';
import { NotificationListComponent } from './notification-list/notification-list.component';

const routes: Routes = [
  { path: '', component: PersonListComponent },
  { path: 'registratie', component: RegistrationListComponent },
  { path: 'notificaties', component: NotificationListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
