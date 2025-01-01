import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VatTuDaHetHanListComponent } from './vat-tu-da-het-han-list.component';

describe('VatTuDaHetHanListComponent', () => {
  let component: VatTuDaHetHanListComponent;
  let fixture: ComponentFixture<VatTuDaHetHanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VatTuDaHetHanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VatTuDaHetHanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
