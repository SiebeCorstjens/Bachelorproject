import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PersonWorkshifts } from '../../models/person-workshifts.model';
import { environment } from 'src/environments/environment';
import { Workshift } from '../../models/workshift.model';
import { AuthService } from '../core/auth.service';
import { Notification } from 'src/app/models/notification.model';

@Injectable()
export class EmployerService {

  constructor(private httpClient: HttpClient, private authService: AuthService, private datepipe: DatePipe) { }

  getAllPersonsByDate(): Observable<PersonWorkshifts[]> {
    var currentDate = new Date();
    var formattedDate = this.datepipe.transform(currentDate, 'yyyy-MM-dd');

    return this.httpClient.get(environment.apiRoot + 'employer/' + this.authService.UserId + '/persons/' + formattedDate).pipe(
      map(res => this.parseData(res)));
  }

  getAllWorkshiftsByDateTime(): Observable<PersonWorkshifts[]> {
    var currentDate = new Date();
    currentDate.setHours(9);
    var formattedDate = this.datepipe.transform(currentDate, 'yyyy-MM-ddTHH:mm:ss');

    return this.httpClient.get<PersonWorkshifts[]>(environment.apiRoot + 'employer/' + this.authService.UserId + '/workshifts/' + formattedDate);
  }

  getAllNotifications(): Observable<Notification[]> {
    return this.httpClient.get<Notification[]>(environment.apiRoot + 'employer/' + this.authService.UserId + '/notifications');
  }

  parseData(json: any): PersonWorkshifts[] {
    return Object.keys(json).map(key => {
      let workshifts = json[key].workshifts;

      let parsedWorkshifts = Object.keys(workshifts).map(key => {
        let workshift: Workshift = {
          id: workshifts[key].id,
          startDateTime: new Date(workshifts[key].startDateTime),
          stopDateTime: new Date(workshifts[key].stopDateTime),
          workTime: workshifts[key].workTime,
          timerState: workshifts[key].timerState,
          job: workshifts[key].job,
        };

        return workshift;
      })

      let person: PersonWorkshifts = {
        id: json[key].id,
        name: json[key].name,
        workshifts: parsedWorkshifts,
      };

      return person;
    });
  }
}
