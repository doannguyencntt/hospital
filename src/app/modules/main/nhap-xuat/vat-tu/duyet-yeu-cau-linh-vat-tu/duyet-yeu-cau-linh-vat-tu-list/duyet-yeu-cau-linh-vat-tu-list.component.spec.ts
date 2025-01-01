import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuyetYeuCauLinhVatTuListComponent } from './duyet-yeu-cau-linh-vat-tu-list.component';

describe('DuyetYeuCauLinhVatTuListComponent', () => {
  let component: DuyetYeuCauLinhVatTuListComponent;
  let fixture: ComponentFixture<DuyetYeuCauLinhVatTuListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuyetYeuCauLinhVatTuListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuyetYeuCauLinhVatTuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
