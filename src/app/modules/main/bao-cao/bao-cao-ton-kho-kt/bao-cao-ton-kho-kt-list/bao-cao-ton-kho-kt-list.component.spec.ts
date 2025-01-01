import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoTonKhoKtListComponent } from './bao-cao-ton-kho-kt-list.component';

describe('BaoCaoTonKhoKtListComponent', () => {
  let component: BaoCaoTonKhoKtListComponent;
  let fixture: ComponentFixture<BaoCaoTonKhoKtListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaoCaoTonKhoKtListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoTonKhoKtListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
