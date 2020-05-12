import { Component, OnInit } from '@angular/core';
import { HubService } from '../services/others/hub.service';
import { Subscription } from 'rxjs';
import { Notification } from '../models/notification.model';
import { EmployerService } from '../services/http/employer.service';
import { NotificationService } from '../services/http/notification.service';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent implements OnInit {

  notifications: Notification[];
  notificationSubscription: Subscription;
  errorMessage: string;

  constructor(private hubService: HubService, private employerService: EmployerService, private notificationService: NotificationService) { }

  ngOnInit() {
    this.employerService.getAllNotifications().subscribe(data => {
      this.notifications = data;
      this.isDataEmpty(data);
    }, error => {
      this.errorMessage = "Er is een fout opgetreden. Probeer het later opnieuw.";
    });

    this.notificationSubscription = this.hubService.notifications$.subscribe(notification => {
      if (notification) {
        if(!this.notifications) {
          this.notifications = [];
          this.notifications.push(notification);
        }
      }
    })
  }

  isDataEmpty(data: Notification[]) {
    if (data.length === 0) {
      this.errorMessage = "Geen notificaties voor het huidige moment.";
    }
  }

  deleteNotification(notification: Notification) {
    this.notificationService.deleteNotification(notification.id).subscribe(data => {
      var index = this.notifications.indexOf(notification);
      this.notifications.splice(index, 1);

      this.isDataEmpty(this.notifications);
    })
  }

  parseMessage(notification: Notification) {
    var message: string;

    switch (notification.state) {
      case 'NotStarted':
        message = "Shift voor job " + notification.job.description.toLocaleLowerCase().italics() + " niet gestart.";
        break;
      case 'Paused':
        message = "Pauze duurt langer dan de opgestelde limiet. (1 uur)"
        break;
    }
    
    return message;
  }

  ngOnDestroy() {
    this.notificationSubscription.unsubscribe();
  }
}
