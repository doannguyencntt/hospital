import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoTinhHinhNhapNccChiTietListComponent } from './bao-cao-tinh-hinh-nhap-ncc-chi-tiet-list.component';

describe('BaoCaoTinhHinhNhapNccChiTietListComponent', () => {
  let component: BaoCaoTinhHinhNhapNccChiTietListComponent;
  let fixture: ComponentFixture<BaoCaoTinhHinhNhapNccChiTietListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaoCaoTinhHinhNhapNccChiTietListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoTinhHinhNhapNccChiTietListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
