import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { AuthService } from './services/core/auth.service';
import { Subscription } from 'rxjs';
import { ErrorService } from './services/others/error.service';
import { HubService } from './services/others/hub.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegistrationService } from './services/others/registration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  isAuthenticated: boolean;
  registrationStatus: string;
  authStatusSubscription: Subscription;
  registrationStatusSubscription: Subscription;

  innerWidth: any;

  @ViewChild('registrationModal') registrationModal: any;

  constructor(private authService: AuthService,
    private errorService: ErrorService,
    private modalService: NgbModal,
    private registrationService: RegistrationService,
    private hubService: HubService) { }

  async ngOnInit() {
    if (!this.isAuthenticated) {
      if (window.location.href.indexOf('?postLogout=true') > 0) {
        this.resetWindow();
      }
    }

    if (window.location.href.indexOf('?error=true') > 0) {
      this.errorService.authErrorSource.next('Aanmelden mislukt.');
      this.resetWindow();
    }

    this.authStatusSubscription = this.authService.authStatus$.subscribe(status => {
      this.isAuthenticated = status
      if (status) {
        this.hubService.startConnection();
        this.hubService.addTransferChartDataListener();
      }
    });

    this.registrationStatusSubscription = this.registrationService.registrationStatus$.subscribe(status => {
      if (status) {
        this.registrationStatus = status;
        this.openRegistrationModal(this.registrationModal);
      }
    });

    this.innerWidth = window.innerWidth;
  }

  signout() {
    this.authService.signout();
  }

  resetWindow() {
    window.history.replaceState({}, window.document.title, window.location.origin);
  }

  openRegistrationModal(modal: any) {
    this.modalService.open(modal);
  }

  ngOnDestroy() {
    this.authStatusSubscription.unsubscribe();
    this.registrationStatusSubscription.unsubscribe();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }
}
