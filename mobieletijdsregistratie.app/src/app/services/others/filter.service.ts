import { Injectable } from '@angular/core';
import { PersonWorkshifts } from '../../models/person-workshifts.model';
import { Filter } from '../../models/filter.model';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  filterPersons(persons: PersonWorkshifts[], filters: Filter[]) {
    let selectedFilters = filters.filter(filter => filter.selected);

    if (selectedFilters.length === 0) {
      return persons;
    }

    return persons.filter(p => this.hasAWorkshiftAppliesByAllFilters(p, selectedFilters));
  }

  hasAWorkshiftAppliesByAllFilters(person: PersonWorkshifts, selectedFilters: Filter[]) {
    return person.workshifts.some(w => {
      return selectedFilters.every(value => {
        return value.doesApply(w);
      });
    });
  }

  selectedFiltersCount(filters: Filter[]) {
    return filters.filter(filter => filter.selected).length;
  }
}
