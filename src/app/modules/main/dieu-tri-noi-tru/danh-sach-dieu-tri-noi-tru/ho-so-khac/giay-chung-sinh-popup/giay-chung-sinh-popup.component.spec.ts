import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiayChungSinhPopupComponent } from './giay-chung-sinh-popup.component';

describe('GiayChungSinhPopupComponent', () => {
  let component: GiayChungSinhPopupComponent;
  let fixture: ComponentFixture<GiayChungSinhPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiayChungSinhPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiayChungSinhPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
