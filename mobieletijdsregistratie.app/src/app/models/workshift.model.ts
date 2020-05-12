import { Job } from './job.model';
import { TimerState } from './enums/timerstate.enum';

export class Workshift {
    id: number;
    job: Job;
    startDateTime: Date;
    stopDateTime: Date;
    workTime: string;
    timerState: TimerState;
}