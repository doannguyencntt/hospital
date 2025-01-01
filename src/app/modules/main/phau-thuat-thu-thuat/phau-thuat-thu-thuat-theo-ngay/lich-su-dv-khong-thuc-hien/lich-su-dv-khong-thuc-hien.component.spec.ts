import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuDvKhongThucHienComponent } from './lich-su-dv-khong-thuc-hien.component';

describe('LichSuDvKhongThucHienComponent', () => {
  let component: LichSuDvKhongThucHienComponent;
  let fixture: ComponentFixture<LichSuDvKhongThucHienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichSuDvKhongThucHienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuDvKhongThucHienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
