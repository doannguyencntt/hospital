import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HocViHocHamListComponent } from './hoc-vi-hoc-ham-list.component';

describe('HocViHocHamListComponent', () => {
  let component: HocViHocHamListComponent;
  let fixture: ComponentFixture<HocViHocHamListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HocViHocHamListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HocViHocHamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
