import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoThuocSapHetHanDungListComponent } from './bao-cao-thuoc-sap-het-han-dung-list.component';

describe('BaoCaoThuocSapHetHanDungListComponent', () => {
  let component: BaoCaoThuocSapHetHanDungListComponent;
  let fixture: ComponentFixture<BaoCaoThuocSapHetHanDungListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaoCaoThuocSapHetHanDungListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoThuocSapHetHanDungListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
