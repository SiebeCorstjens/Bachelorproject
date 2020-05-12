import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private httpClient: HttpClient) { }

  deleteNotification(id: number): Observable<any> {
    return this.httpClient.delete(environment.apiRoot + 'notifications/' + id);
  }
}
