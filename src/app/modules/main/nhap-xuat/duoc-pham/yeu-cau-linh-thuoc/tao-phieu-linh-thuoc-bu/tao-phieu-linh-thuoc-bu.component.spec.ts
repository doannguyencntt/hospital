import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaoPhieuLinhThuocBuComponent } from './tao-phieu-linh-thuoc-bu.component';

describe('TaoPhieuLinhThuocBuComponent', () => {
  let component: TaoPhieuLinhThuocBuComponent;
  let fixture: ComponentFixture<TaoPhieuLinhThuocBuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaoPhieuLinhThuocBuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaoPhieuLinhThuocBuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
