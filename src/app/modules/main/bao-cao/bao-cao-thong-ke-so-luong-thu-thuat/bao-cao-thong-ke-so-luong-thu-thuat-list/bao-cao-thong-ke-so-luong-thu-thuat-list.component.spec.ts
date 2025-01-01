import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoThongKeSoLuongThuThuatListComponent } from './bao-cao-thong-ke-so-luong-thu-thuat-list.component';

describe('BaoCaoThongKeSoLuongThuThuatListComponent', () => {
  let component: BaoCaoThongKeSoLuongThuThuatListComponent;
  let fixture: ComponentFixture<BaoCaoThongKeSoLuongThuThuatListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaoCaoThongKeSoLuongThuThuatListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoThongKeSoLuongThuThuatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
