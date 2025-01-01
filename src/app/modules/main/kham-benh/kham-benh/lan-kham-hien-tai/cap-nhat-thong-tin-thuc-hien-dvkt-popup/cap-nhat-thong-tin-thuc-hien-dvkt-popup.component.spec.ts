import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapNhatThongTinThucHienDvktPopupComponent } from './cap-nhat-thong-tin-thuc-hien-dvkt-popup.component';

describe('CapNhatThongTinThucHienDvktPopupComponent', () => {
  let component: CapNhatThongTinThucHienDvktPopupComponent;
  let fixture: ComponentFixture<CapNhatThongTinThucHienDvktPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapNhatThongTinThucHienDvktPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapNhatThongTinThucHienDvktPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
