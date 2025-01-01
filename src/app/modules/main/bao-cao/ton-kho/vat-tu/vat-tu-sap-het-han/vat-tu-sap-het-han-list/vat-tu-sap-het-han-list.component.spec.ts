import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VatTuSapHetHanListComponent } from './vat-tu-sap-het-han-list.component';

describe('VatTuSapHetHanListComponent', () => {
  let component: VatTuSapHetHanListComponent;
  let fixture: ComponentFixture<VatTuSapHetHanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VatTuSapHetHanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VatTuSapHetHanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
