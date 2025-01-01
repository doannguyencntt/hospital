import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhieuLinhThuocBuSharedComponent } from './phieu-linh-thuoc-bu-shared.component';

describe('PhieuLinhThuocBuSharedComponent', () => {
  let component: PhieuLinhThuocBuSharedComponent;
  let fixture: ComponentFixture<PhieuLinhThuocBuSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhieuLinhThuocBuSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhieuLinhThuocBuSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
