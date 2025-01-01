import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaoPhieuLinhThuocTrucTiepComponent } from './tao-phieu-linh-thuoc-truc-tiep.component';

describe('TaoPhieuLinhThuocTrucTiepComponent', () => {
  let component: TaoPhieuLinhThuocTrucTiepComponent;
  let fixture: ComponentFixture<TaoPhieuLinhThuocTrucTiepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaoPhieuLinhThuocTrucTiepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaoPhieuLinhThuocTrucTiepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
