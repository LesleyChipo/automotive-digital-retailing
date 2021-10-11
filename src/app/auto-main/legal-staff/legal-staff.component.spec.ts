import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalStaffComponent } from './legal-staff.component';

describe('LegalStaffComponent', () => {
  let component: LegalStaffComponent;
  let fixture: ComponentFixture<LegalStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalStaffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
