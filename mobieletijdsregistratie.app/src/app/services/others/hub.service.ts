import { Injectable } from '@angular/core';
import * as signalR from "@aspnet/signalr";
import { NotifierService } from 'angular-notifier';
import { BehaviorSubject } from 'rxjs';
import { Notification } from 'src/app/models/notification.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HubService {

  private hubConnection: signalR.HubConnection
  private _notificationsSource = new BehaviorSubject<Notification>(null);
  notifications$ = this._notificationsSource.asObservable();

  constructor(private notifierService: NotifierService) { }

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(environment.apiRoot + 'notificaties')
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err));
  }
  
  public addTransferChartDataListener = () => {
    this.hubConnection.on('broadcastnotification', (data) => {
      this._notificationsSource.next(data);
      this.notifierService.notify('default', 'Nieuwe notificatie beschikbaar');
    });
  }
}
