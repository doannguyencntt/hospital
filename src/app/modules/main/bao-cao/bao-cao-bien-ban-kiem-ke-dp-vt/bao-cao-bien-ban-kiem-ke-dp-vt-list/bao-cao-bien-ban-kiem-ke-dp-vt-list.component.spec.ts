import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoBienBanKiemKeDpVtListComponent } from './bao-cao-bien-ban-kiem-ke-dp-vt-list.component';

describe('BaoCaoBienBanKiemKeDpVtListComponent', () => {
  let component: BaoCaoBienBanKiemKeDpVtListComponent;
  let fixture: ComponentFixture<BaoCaoBienBanKiemKeDpVtListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaoCaoBienBanKiemKeDpVtListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoBienBanKiemKeDpVtListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
