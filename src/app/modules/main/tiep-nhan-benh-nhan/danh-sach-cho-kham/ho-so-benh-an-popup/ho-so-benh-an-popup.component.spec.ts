import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoSoBenhAnPopupComponent } from './ho-so-benh-an-popup.component';

describe('HoSoBenhAnPopupComponent', () => {
  let component: HoSoBenhAnPopupComponent;
  let fixture: ComponentFixture<HoSoBenhAnPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoSoBenhAnPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoSoBenhAnPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
