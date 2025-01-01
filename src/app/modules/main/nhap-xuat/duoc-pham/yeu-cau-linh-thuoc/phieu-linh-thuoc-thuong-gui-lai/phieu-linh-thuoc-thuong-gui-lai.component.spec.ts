import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhieuLinhThuocThuongGuiLaiComponent } from './phieu-linh-thuoc-thuong-gui-lai.component';

describe('PhieuLinhThuocThuongGuiLaiComponent', () => {
  let component: PhieuLinhThuocThuongGuiLaiComponent;
  let fixture: ComponentFixture<PhieuLinhThuocThuongGuiLaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhieuLinhThuocThuongGuiLaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhieuLinhThuocThuongGuiLaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
