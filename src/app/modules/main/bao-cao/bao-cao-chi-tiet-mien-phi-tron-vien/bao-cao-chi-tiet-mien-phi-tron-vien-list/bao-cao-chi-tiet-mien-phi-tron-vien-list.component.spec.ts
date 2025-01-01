import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoChiTietMienPhiTronVienListComponent } from './bao-cao-chi-tiet-mien-phi-tron-vien-list.component';

describe('BaoCaoChiTietMienPhiTronVienListComponent', () => {
  let component: BaoCaoChiTietMienPhiTronVienListComponent;
  let fixture: ComponentFixture<BaoCaoChiTietMienPhiTronVienListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaoCaoChiTietMienPhiTronVienListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoChiTietMienPhiTronVienListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
