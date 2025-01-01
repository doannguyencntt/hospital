import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoTinhHinhNhapTuNccListComponent } from './bao-cao-tinh-hinh-nhap-tu-ncc-list.component';

describe('BaoCaoTinhHinhNhapTuNccListComponent', () => {
  let component: BaoCaoTinhHinhNhapTuNccListComponent;
  let fixture: ComponentFixture<BaoCaoTinhHinhNhapTuNccListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaoCaoTinhHinhNhapTuNccListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoTinhHinhNhapTuNccListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
