import { Person } from './person.model';
import { Workshift } from './workshift.model';

export class Contract {
    id: number;
    person: Person;
    workshifts: Workshift[];
}