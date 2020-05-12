import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Workshift } from '../../models/workshift.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class WorkshiftService {

  constructor(private httpClient: HttpClient) { }

  getAllWorkshiftRegistrations(): Observable<Workshift[]> {
    return this.httpClient.get<Workshift[]>(environment.apiRoot + 'workshift/');
  }

  getWorkshiftRegistration(id: number): Observable<Workshift> {
    return this.httpClient.get<Workshift>(environment.apiRoot + 'workshift/' + id);
  }

  getWorkshiftRegistrationElapsedTime(id: number): Observable<number> {
    return this.httpClient.get<number>(environment.apiRoot + 'workshift/' + id + '/elapsed/');
  }

  startWorkshiftRegistration(id: number) {
    return this.httpClient.post(environment.apiRoot + 'workshift/start?id=' + id, null);
  }

  pauseWorkshiftRegistration(id: number) {
    return this.httpClient.post(environment.apiRoot + 'workshift/pause?id=' + id, null);
  }

  stopWorkshiftRegistration(id: number) {
    return this.httpClient.post(environment.apiRoot + 'workshift/stop?id=' + id, null);
  }
}
