import { Component, OnInit } from '@angular/core';
import { EmployerService } from '../services/http/employer.service';
import { PersonWorkshifts } from '../models/person-workshifts.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Filter } from '../models/filter.model';
import { Workshift } from '../models/workshift.model';
import { FilterService } from '../services/others/filter.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  persons: PersonWorkshifts[];
  filteredPersons: PersonWorkshifts[];

  searchName: string;
  errorMessage: string;

  currentDate: Date = new Date();

  filters: Filter[] = [
    {
      name: 'startTime',
      doesApply: function (workshift: Workshift) {
        return workshift.startDateTime.getHours() == this.value.hour;
      },
      selected: false,
      value: { hour: 0, minute: 0 },
    },
    {
      name: 'stopTime',
      doesApply: function (workshift: Workshift) {
        return workshift.stopDateTime.getHours() == this.value.hour;
      },
      selected: false,
      value: { hour: 0, minute: 0 },
    }
  ];

  constructor(private employerService: EmployerService, 
    private filterService: FilterService, 
    private modalService: NgbModal) { }

  ngOnInit() {
    this.employerService.getAllPersonsByDate().subscribe(data => {
      this.persons = data;
      this.filteredPersons = data;
      this.isDataEmpty(data);
    }, error => {
      this.errorMessage = "Er is een fout opgetreden. Probeer het later opnieuw.";
    });
  }

  isDataEmpty(data: PersonWorkshifts[]) {
    if (data.length === 0) {
      this.errorMessage = "Geen werkshifts voor het huidige moment.";
    }
  }

  openFilterModal(modal: any) {
    this.modalService.open(modal);
  }

  applyFilter() {
    this.filteredPersons = this.filterService.filterPersons(this.persons, this.filters);
    this.modalService.dismissAll();
  }

  getSelectedFiltersCount() {
    return this.filterService.selectedFiltersCount(this.filters);
  }
}
