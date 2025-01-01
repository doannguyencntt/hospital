import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhieuLinhThuocTrucTiepGuiLaiComponent } from './phieu-linh-thuoc-truc-tiep-gui-lai.component';

describe('PhieuLinhThuocTrucTiepGuiLaiComponent', () => {
  let component: PhieuLinhThuocTrucTiepGuiLaiComponent;
  let fixture: ComponentFixture<PhieuLinhThuocTrucTiepGuiLaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhieuLinhThuocTrucTiepGuiLaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhieuLinhThuocTrucTiepGuiLaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
