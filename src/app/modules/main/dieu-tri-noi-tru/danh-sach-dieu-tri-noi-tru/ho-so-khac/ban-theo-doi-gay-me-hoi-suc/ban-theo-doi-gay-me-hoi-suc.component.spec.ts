import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanTheoDoiGayMeHoiSucComponent } from './ban-theo-doi-gay-me-hoi-suc.component';

describe('BanTheoDoiGayMeHoiSucComponent', () => {
  let component: BanTheoDoiGayMeHoiSucComponent;
  let fixture: ComponentFixture<BanTheoDoiGayMeHoiSucComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanTheoDoiGayMeHoiSucComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanTheoDoiGayMeHoiSucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
