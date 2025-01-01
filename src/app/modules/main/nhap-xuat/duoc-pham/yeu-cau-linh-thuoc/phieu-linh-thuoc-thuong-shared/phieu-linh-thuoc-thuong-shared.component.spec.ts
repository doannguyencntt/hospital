import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhieuLinhThuocThuongSharedComponent } from './phieu-linh-thuoc-thuong-shared.component';

describe('PhieuLinhThuocThuongSharedComponent', () => {
  let component: PhieuLinhThuocThuongSharedComponent;
  let fixture: ComponentFixture<PhieuLinhThuocThuongSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhieuLinhThuocThuongSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhieuLinhThuocThuongSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
