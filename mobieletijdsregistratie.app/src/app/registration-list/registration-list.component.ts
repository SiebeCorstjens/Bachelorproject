import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegistrationListModalComponent } from '../registration-list-modal/registration-list-modal.component';
import { Workshift } from '../models/workshift.model';
import { EmployerService } from '../services/http/employer.service';
import { PersonWorkshifts } from '../models/person-workshifts.model';
import { TimerState } from '../models/enums/timerstate.enum';
import { Job } from '../models/job.model';
import { Person } from '../models/person.model';
import { Filter } from '../models/filter.model';
import { FilterService } from '../services/others/filter.service';

@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.css']
})
export class RegistrationListComponent implements OnInit {

  persons: PersonWorkshifts[];
  filteredPersons: PersonWorkshifts[];

  searchName: string;
  errorMessage: string;

  jobs: Job[];
  timerState = TimerState;
  currentDate: Date = new Date();


  filters: Filter[] = [
    {
      name: 'jobDescription',
      doesApply: function (workshift: Workshift) {
        return workshift.job.id == this.value;
      },
      selected: false,
      value: null,
    },
    {
      name: 'registration',
      doesApply: function (workshift: Workshift) {
        return workshift.timerState == this.value;
      },
      selected: false,
      value: null,
    }
  ];

  constructor(private modalService: NgbModal,
    private filterService: FilterService,
    private employerService: EmployerService) { }

  ngOnInit() {
    this.getWorkshifts();
    this.jobs = [];
  }

  getWorkshifts() {
    this.employerService.getAllWorkshiftsByDateTime().subscribe(data => {
      this.persons = data;
      this.filteredPersons = data;
      this.isDataEmpty(data);
    }, error => {
      this.errorMessage = "Er is een fout opgetreden. Probeer het later opnieuw.";
    });
  }

  isDataEmpty(data: PersonWorkshifts[]) {
    if(data.length === 0) {
      this.errorMessage = "Geen werkshifts voor het huidige moment.";
    } else {
      this.parseJobs(data);
    }
  }

  parseJobs(data: PersonWorkshifts[]) {
    data.forEach(p => {
      p.workshifts.forEach(w => {
        if (!this.jobs.some(job => job.id == w.job.id)) {
          this.jobs.push(w.job);
        }
      });
    });
  }

  openRegistrationDetails(person: Person, workshift: Workshift) {
    const modalRef = this.modalService.open(RegistrationListModalComponent);

    modalRef.componentInstance.person = person;
    modalRef.componentInstance.workshift = workshift;
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
