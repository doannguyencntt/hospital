import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaoPhieuLinhThuocThuongComponent } from './tao-phieu-linh-thuoc-thuong.component';

describe('TaoPhieuLinhThuocThuongComponent', () => {
  let component: TaoPhieuLinhThuocThuongComponent;
  let fixture: ComponentFixture<TaoPhieuLinhThuocThuongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaoPhieuLinhThuocThuongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaoPhieuLinhThuocThuongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
