import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoBenhNhanKhamNgoaiTruListComponent } from './bao-cao-benh-nhan-kham-ngoai-tru-list.component';

describe('BaoCaoBenhNhanKhamNgoaiTruListComponent', () => {
  let component: BaoCaoBenhNhanKhamNgoaiTruListComponent;
  let fixture: ComponentFixture<BaoCaoBenhNhanKhamNgoaiTruListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaoCaoBenhNhanKhamNgoaiTruListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoBenhNhanKhamNgoaiTruListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
