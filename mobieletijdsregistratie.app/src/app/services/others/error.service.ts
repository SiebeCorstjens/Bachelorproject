import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  authErrorSource = new BehaviorSubject<string>(null);
  authError$ = this.authErrorSource.asObservable();
  
  constructor() { }
}
