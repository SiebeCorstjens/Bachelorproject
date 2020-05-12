import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolutionErrorComponent } from './resolution-error.component';

describe('ResolutionErrorComponent', () => {
  let component: ResolutionErrorComponent;
  let fixture: ComponentFixture<ResolutionErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResolutionErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolutionErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
