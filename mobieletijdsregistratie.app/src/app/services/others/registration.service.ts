import { Injectable } from '@angular/core';
import { TimerAction } from 'src/app/models/enums/timeraction.enum';
import { WorkshiftService } from '../http/workshift.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private _registrationStatusSource = new BehaviorSubject<string>(null);
  registrationStatus$ = this._registrationStatusSource.asObservable();

  constructor(private workshiftService: WorkshiftService) { }

  performRegistration(timerAction: string, workshiftId: number) {
    switch (TimerAction[timerAction]) {
      case 'Start':
        this.workshiftService.startWorkshiftRegistration(workshiftId).subscribe(data => this.registrationStatus('gestart'));
        break;
      case 'Pause':
        this.workshiftService.pauseWorkshiftRegistration(workshiftId).subscribe(data => this.registrationStatus('gepauzeerd'));
        break;
      case 'Stop':
        this.workshiftService.stopWorkshiftRegistration(workshiftId).subscribe(data => this.registrationStatus('gestopt'));
        break;
    }
  }

  registrationStatus(timerAction: string) {
    this._registrationStatusSource.next(timerAction);
  }
}

