import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanInTheoDoiGayMeHoiSucComponent } from './ban-in-theo-doi-gay-me-hoi-suc.component';

describe('BanInTheoDoiGayMeHoiSucComponent', () => {
  let component: BanInTheoDoiGayMeHoiSucComponent;
  let fixture: ComponentFixture<BanInTheoDoiGayMeHoiSucComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanInTheoDoiGayMeHoiSucComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanInTheoDoiGayMeHoiSucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
