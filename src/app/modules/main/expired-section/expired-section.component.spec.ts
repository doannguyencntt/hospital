import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiredSectionComponent } from './expired-section.component';

describe('ExpiredSectionComponent', () => {
  let component: ExpiredSectionComponent;
  let fixture: ComponentFixture<ExpiredSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpiredSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpiredSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
