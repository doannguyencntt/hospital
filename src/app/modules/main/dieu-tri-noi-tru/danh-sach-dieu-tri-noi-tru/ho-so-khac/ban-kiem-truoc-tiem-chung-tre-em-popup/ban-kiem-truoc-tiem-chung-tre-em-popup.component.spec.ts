import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanKiemTruocTiemChungTreEmPopupComponent } from './ban-kiem-truoc-tiem-chung-tre-em-popup.component';

describe('BanKiemTruocTiemChungTreEmPopupComponent', () => {
  let component: BanKiemTruocTiemChungTreEmPopupComponent;
  let fixture: ComponentFixture<BanKiemTruocTiemChungTreEmPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanKiemTruocTiemChungTreEmPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanKiemTruocTiemChungTreEmPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
