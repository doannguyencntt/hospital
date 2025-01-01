import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuyetYeuCauLinhThuocBuComponent } from './duyet-yeu-cau-linh-thuoc-bu.component';

describe('DuyetYeuCauLinhThuocBuComponent', () => {
  let component: DuyetYeuCauLinhThuocBuComponent;
  let fixture: ComponentFixture<DuyetYeuCauLinhThuocBuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuyetYeuCauLinhThuocBuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuyetYeuCauLinhThuocBuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
