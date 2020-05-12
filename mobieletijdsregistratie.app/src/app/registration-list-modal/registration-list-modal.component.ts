import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../services/core/auth.service';
import { WorkshiftService } from '../services/http/workshift.service';
import { Workshift } from '../models/workshift.model';
import { TimerState } from '../models/enums/timerstate.enum';
import { TimerAction } from '../models/enums/timeraction.enum';
import { Person } from '../models/person.model';

@Component({
  selector: 'app-registration-list-modal',
  templateUrl: './registration-list-modal.component.html',
  styleUrls: ['./registration-list-modal.component.css']
})
export class RegistrationListModalComponent {
  _person: Person;
  _workshift: Workshift;

  @Input()
  set person(person: Person) {
    this._person = person;
  }

  @Input()
  set workshift(workshift: Workshift) {
    this._workshift = workshift;

    this.workshiftService.getWorkshiftRegistrationElapsedTime(workshift.id).subscribe(data => {
      if (TimerState[workshift.timerState] == TimerState.StartedState) {
        var startTime = Date.now();

        setInterval(() => {
          this.workTime = Date.now() - startTime + data;
        }, 10);

      }
      if (TimerState[workshift.timerState] == TimerState.PausedState || TimerState[workshift.timerState] == TimerState.StoppedState) {
        this.workTime = data;
        return;
      }

      this.workTime = 0;
    });
  }

  selectedTimerAction: TimerAction;
  timerAction = TimerAction;
  workTime: number;

  constructor(public activeModal: NgbActiveModal, public authService: AuthService, public workshiftService: WorkshiftService) { }

  selectAction(timerAction: TimerAction) {
    this.selectedTimerAction = timerAction;
  }

  identifyPerson() {
    localStorage.setItem('registrationValues', this.selectedTimerAction + ',' + this._workshift.id.toString());
    
    this.authService.loginPerson();
  }

  isStartButtonDisabled() {
    return TimerState[this._workshift.timerState] == TimerState.StartedState 
      || TimerState[this._workshift.timerState] == TimerState.StoppedState;
  }

  isPauseButtonDisabled() {
    return TimerState[this._workshift.timerState] === TimerState.NoState 
      || TimerState[this._workshift.timerState] === TimerState.PausedState 
      || TimerState[this._workshift.timerState] === TimerState.StoppedState;
  }

  isStopButtonDisabled() {
    return TimerState[this._workshift.timerState] === TimerState.NoState 
      || TimerState[this._workshift.timerState] === TimerState.StoppedState;
  }
}
