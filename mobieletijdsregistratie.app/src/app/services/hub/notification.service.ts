import { Injectable } from '@angular/core';
import * as signalR from "@aspnet/signalr";
import { NotifierService } from 'angular-notifier';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private hubConnection: signalR.HubConnection

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(environment.apiRoot + 'notificaties')
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
  }

  public addTransferChartDataListener = () => {
    this.hubConnection.on('broadcastnotification', (data) => {
      this.notifierService.notify('default', data);
    });
  }

  constructor(private notifierService: NotifierService) { }
}
