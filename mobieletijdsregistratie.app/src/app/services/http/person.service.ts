import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../../models/person.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class PersonService {

  constructor(private httpClient: HttpClient) { }

  getAllPersons(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(environment.apiRoot + 'person');
  }
}