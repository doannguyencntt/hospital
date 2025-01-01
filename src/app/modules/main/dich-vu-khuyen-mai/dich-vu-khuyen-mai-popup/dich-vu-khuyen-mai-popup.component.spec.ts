import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DichVuKhuyenMaiPopupComponent } from './dich-vu-khuyen-mai-popup.component';

describe('DichVuKhuyenMaiPopupComponent', () => {
  let component: DichVuKhuyenMaiPopupComponent;
  let fixture: ComponentFixture<DichVuKhuyenMaiPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DichVuKhuyenMaiPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DichVuKhuyenMaiPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
