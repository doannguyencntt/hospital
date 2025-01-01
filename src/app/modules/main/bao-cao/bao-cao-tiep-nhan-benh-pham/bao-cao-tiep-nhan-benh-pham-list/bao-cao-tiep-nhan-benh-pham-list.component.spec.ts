import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoTiepNhanBenhPhamListComponent } from './bao-cao-tiep-nhan-benh-pham-list.component';

describe('BaoCaoTiepNhanBenhPhamListComponent', () => {
  let component: BaoCaoTiepNhanBenhPhamListComponent;
  let fixture: ComponentFixture<BaoCaoTiepNhanBenhPhamListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaoCaoTiepNhanBenhPhamListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoTiepNhanBenhPhamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
