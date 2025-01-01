import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhamBenhDichVuChuaThucHienPopupComponent } from './kham-benh-dich-vu-chua-thuc-hien-popup.component';

describe('KhamBenhDichVuChuaThucHienPopupComponent', () => {
  let component: KhamBenhDichVuChuaThucHienPopupComponent;
  let fixture: ComponentFixture<KhamBenhDichVuChuaThucHienPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhamBenhDichVuChuaThucHienPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhamBenhDichVuChuaThucHienPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
