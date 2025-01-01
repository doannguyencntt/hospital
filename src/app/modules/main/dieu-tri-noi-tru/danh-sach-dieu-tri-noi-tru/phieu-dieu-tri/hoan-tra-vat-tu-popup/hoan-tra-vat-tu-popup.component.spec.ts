import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoanTraVatTuPopupComponent } from './hoan-tra-vat-tu-popup.component';

describe('HoanTraVatTuPopupComponent', () => {
  let component: HoanTraVatTuPopupComponent;
  let fixture: ComponentFixture<HoanTraVatTuPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoanTraVatTuPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoanTraVatTuPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
