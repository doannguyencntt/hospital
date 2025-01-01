import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoSoPhucTrinhPhauThuatThuThuatListComponent } from './bao-cao-so-phuc-trinh-phau-thuat-thu-thuat-list.component';

describe('BaoCaoSoPhucTrinhPhauThuatThuThuatListComponent', () => {
  let component: BaoCaoSoPhucTrinhPhauThuatThuThuatListComponent;
  let fixture: ComponentFixture<BaoCaoSoPhucTrinhPhauThuatThuThuatListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaoCaoSoPhucTrinhPhauThuatThuThuatListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoSoPhucTrinhPhauThuatThuThuatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
