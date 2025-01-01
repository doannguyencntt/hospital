import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BienBanGayMePopupComponent } from './bien-ban-gay-me-popup.component';

describe('BienBanGayMePopupComponent', () => {
  let component: BienBanGayMePopupComponent;
  let fixture: ComponentFixture<BienBanGayMePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BienBanGayMePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BienBanGayMePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
