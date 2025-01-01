import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoDuocChiTietXuatNoiBoListComponent } from './bao-cao-duoc-chi-tiet-xuat-noi-bo-list.component';

describe('BaoCaoDuocChiTietXuatNoiBoListComponent', () => {
  let component: BaoCaoDuocChiTietXuatNoiBoListComponent;
  let fixture: ComponentFixture<BaoCaoDuocChiTietXuatNoiBoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaoCaoDuocChiTietXuatNoiBoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoDuocChiTietXuatNoiBoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
