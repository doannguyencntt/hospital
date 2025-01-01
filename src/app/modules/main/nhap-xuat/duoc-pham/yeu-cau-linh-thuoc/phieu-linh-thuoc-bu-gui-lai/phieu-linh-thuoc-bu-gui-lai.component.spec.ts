import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhieuLinhThuocBuGuiLaiComponent } from './phieu-linh-thuoc-bu-gui-lai.component';

describe('PhieuLinhThuocBuGuiLaiComponent', () => {
  let component: PhieuLinhThuocBuGuiLaiComponent;
  let fixture: ComponentFixture<PhieuLinhThuocBuGuiLaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhieuLinhThuocBuGuiLaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhieuLinhThuocBuGuiLaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
