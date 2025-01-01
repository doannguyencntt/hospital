import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BienBanHoiChanGayMeComponent } from './bien-ban-hoi-chan-gay-me.component';

describe('BienBanHoiChanGayMeComponent', () => {
  let component: BienBanHoiChanGayMeComponent;
  let fixture: ComponentFixture<BienBanHoiChanGayMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BienBanHoiChanGayMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BienBanHoiChanGayMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
