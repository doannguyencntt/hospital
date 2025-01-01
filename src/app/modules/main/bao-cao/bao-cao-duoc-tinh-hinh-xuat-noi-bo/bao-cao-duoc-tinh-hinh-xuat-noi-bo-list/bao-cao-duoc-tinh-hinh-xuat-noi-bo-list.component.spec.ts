import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoDuocTinhHinhXuatNoiBoListComponent } from './bao-cao-duoc-tinh-hinh-xuat-noi-bo-list.component';

describe('BaoCaoDuocTinhHinhXuatNoiBoListComponent', () => {
  let component: BaoCaoDuocTinhHinhXuatNoiBoListComponent;
  let fixture: ComponentFixture<BaoCaoDuocTinhHinhXuatNoiBoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaoCaoDuocTinhHinhXuatNoiBoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoDuocTinhHinhXuatNoiBoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
