import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoHoatDongKhoaKhamBenhListComponent } from './bao-cao-hoat-dong-khoa-kham-benh-list.component';

describe('BaoCaoHoatDongKhoaKhamBenhListComponent', () => {
  let component: BaoCaoHoatDongKhoaKhamBenhListComponent;
  let fixture: ComponentFixture<BaoCaoHoatDongKhoaKhamBenhListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaoCaoHoatDongKhoaKhamBenhListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoHoatDongKhoaKhamBenhListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
