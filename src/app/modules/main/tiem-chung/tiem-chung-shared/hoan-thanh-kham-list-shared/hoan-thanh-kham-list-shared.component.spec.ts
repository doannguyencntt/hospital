import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoanThanhKhamListSharedComponent } from './hoan-thanh-kham-list-shared.component';

describe('HoanThanhKhamListSharedComponent', () => {
  let component: HoanThanhKhamListSharedComponent;
  let fixture: ComponentFixture<HoanThanhKhamListSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoanThanhKhamListSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoanThanhKhamListSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
