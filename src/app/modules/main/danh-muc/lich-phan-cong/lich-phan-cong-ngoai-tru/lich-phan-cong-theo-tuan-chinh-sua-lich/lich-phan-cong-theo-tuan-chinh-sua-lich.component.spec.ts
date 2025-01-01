import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichPhanCongTheoTuanChinhSuaLichComponent } from './lich-phan-cong-theo-tuan-chinh-sua-lich.component';

describe('LichPhanCongTheoTuanChinhSuaLichComponent', () => {
  let component: LichPhanCongTheoTuanChinhSuaLichComponent;
  let fixture: ComponentFixture<LichPhanCongTheoTuanChinhSuaLichComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichPhanCongTheoTuanChinhSuaLichComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichPhanCongTheoTuanChinhSuaLichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
