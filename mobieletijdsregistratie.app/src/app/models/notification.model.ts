import { Job } from './job.model';
import { Person } from './person.model';

export class Notification {
    id: number;
    state: string;
    person: Person;
    job: Job;
    date: Date;
}