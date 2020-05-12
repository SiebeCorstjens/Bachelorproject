import { Pipe, PipeTransform } from '@angular/core';
import { PersonWorkshifts } from '../models/person-workshifts.model';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
  transform(persons: PersonWorkshifts[], searchName: string): any[] {
    if (!persons) return [];
    if (!searchName) return persons;

    searchName = searchName.toLowerCase();

    return persons.filter(person => {
      return person.name.toLocaleLowerCase().includes(searchName);
    });
  }
}
