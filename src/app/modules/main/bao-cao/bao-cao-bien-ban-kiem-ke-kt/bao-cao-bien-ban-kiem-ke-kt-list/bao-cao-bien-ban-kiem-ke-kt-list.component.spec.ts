import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoBienBanKiemKeKtListComponent } from './bao-cao-bien-ban-kiem-ke-kt-list.component';

describe('BaoCaoBienBanKiemKeKtListComponent', () => {
  let component: BaoCaoBienBanKiemKeKtListComponent;
  let fixture: ComponentFixture<BaoCaoBienBanKiemKeKtListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaoCaoBienBanKiemKeKtListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoBienBanKiemKeKtListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
