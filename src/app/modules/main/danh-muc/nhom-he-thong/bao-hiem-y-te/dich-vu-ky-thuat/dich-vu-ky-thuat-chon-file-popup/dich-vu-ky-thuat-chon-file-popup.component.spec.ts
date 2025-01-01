import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DichVuKyThuatChonFilePopupComponent } from './dich-vu-ky-thuat-chon-file-popup.component';

describe('DichVuKyThuatChonFilePopupComponent', () => {
  let component: DichVuKyThuatChonFilePopupComponent;
  let fixture: ComponentFixture<DichVuKyThuatChonFilePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DichVuKyThuatChonFilePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DichVuKyThuatChonFilePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
