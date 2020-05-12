import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationListModalComponent } from './registration-list-modal.component';

describe('RegistrationListModalComponent', () => {
  let component: RegistrationListModalComponent;
  let fixture: ComponentFixture<RegistrationListModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationListModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationListModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
