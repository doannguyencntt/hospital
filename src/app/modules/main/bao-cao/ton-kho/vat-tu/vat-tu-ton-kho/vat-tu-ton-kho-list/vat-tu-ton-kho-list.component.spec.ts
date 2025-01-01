import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VatTuTonKhoListComponent } from './vat-tu-ton-kho-list.component';

describe('VatTuTonKhoListComponent', () => {
  let component: VatTuTonKhoListComponent;
  let fixture: ComponentFixture<VatTuTonKhoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VatTuTonKhoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VatTuTonKhoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
