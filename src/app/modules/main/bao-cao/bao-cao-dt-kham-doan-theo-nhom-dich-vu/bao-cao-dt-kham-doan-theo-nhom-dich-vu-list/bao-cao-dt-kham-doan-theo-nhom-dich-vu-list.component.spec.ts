import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoDtKhamDoanTheoNhomDichVuListComponent } from './bao-cao-dt-kham-doan-theo-nhom-dich-vu-list.component';

describe('BaoCaoDtKhamDoanTheoNhomDichVuListComponent', () => {
  let component: BaoCaoDtKhamDoanTheoNhomDichVuListComponent;
  let fixture: ComponentFixture<BaoCaoDtKhamDoanTheoNhomDichVuListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaoCaoDtKhamDoanTheoNhomDichVuListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoDtKhamDoanTheoNhomDichVuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
