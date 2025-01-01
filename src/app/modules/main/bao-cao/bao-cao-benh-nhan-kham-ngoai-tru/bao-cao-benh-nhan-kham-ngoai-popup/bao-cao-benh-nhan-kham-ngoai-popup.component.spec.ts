import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoBenhNhanKhamNgoaiPopupComponent } from './bao-cao-benh-nhan-kham-ngoai-popup.component';

describe('BaoCaoBenhNhanKhamNgoaiPopupComponent', () => {
  let component: BaoCaoBenhNhanKhamNgoaiPopupComponent;
  let fixture: ComponentFixture<BaoCaoBenhNhanKhamNgoaiPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaoCaoBenhNhanKhamNgoaiPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoBenhNhanKhamNgoaiPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
