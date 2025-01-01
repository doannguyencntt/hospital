import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoanTraThuocPopupComponent } from './hoan-tra-thuoc-popup.component';

describe('HoanTraThuocPopupComponent', () => {
  let component: HoanTraThuocPopupComponent;
  let fixture: ComponentFixture<HoanTraThuocPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoanTraThuocPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoanTraThuocPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
