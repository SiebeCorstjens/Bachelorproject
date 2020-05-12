import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatToolbarModule, MatSidenavModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NotifierModule, NotifierOptions } from 'angular-notifier';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './services/core/auth.service';
import { WorkshiftService } from './services/http/workshift.service';
import { PersonService } from './services/http/person.service';
import { RegistrationListComponent } from './registration-list/registration-list.component';
import { RegistrationListModalComponent } from './registration-list-modal/registration-list-modal.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FeatherIconsPipe } from './pipes/feather.pipe';
import { PersonListComponent } from './person-list/person-list.component';
import { DatePipe } from '@angular/common';
import { EmployerService } from './services/http/employer.service';
import { FilterPipe } from './pipes/filter.pipe';
import { LoginComponent } from './login/login.component';
import { AuthInterceptor } from './services/core/auth.interceptor';
import { ErrorService } from './services/others/error.service';
import { FilterService } from './services/others/filter.service';
import { RegistrationService } from './services/others/registration.service';
import { HubService } from './services/others/hub.service';
import { NotificationListComponent } from './notification-list/notification-list.component';
import { ResolutionErrorComponent } from './resolution-error/resolution-error.component';

const customNotifierOptions: NotifierOptions = {
  position: {
		horizontal: {
			position: 'right',
			distance: 12
		},
		vertical: {
			position: 'bottom',
			distance: 12,
			gap: 10
		}
	},
  theme: 'material',
  behaviour: {
    autoHide: 2500,
    onClick: false,
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};

@NgModule({
  declarations: [
    AppComponent,
    RegistrationListComponent,
    RegistrationListModalComponent,
    SidebarComponent,
    FeatherIconsPipe,
    PersonListComponent,
    FilterPipe,
    LoginComponent,
    NotificationListComponent,
    ResolutionErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot(),
    MatToolbarModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NotifierModule.withConfig(customNotifierOptions),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthService,
    PersonService,
    WorkshiftService,
    EmployerService,
    DatePipe,
    FilterService,
    ErrorService,
    RegistrationService,
    HubService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    RegistrationListModalComponent,
  ],
})

export class AppModule { }