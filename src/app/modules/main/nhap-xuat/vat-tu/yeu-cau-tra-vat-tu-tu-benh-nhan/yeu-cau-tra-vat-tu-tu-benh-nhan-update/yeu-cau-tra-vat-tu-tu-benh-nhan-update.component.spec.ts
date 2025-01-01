import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YeuCauTraVatTuTuBenhNhanUpdateComponent } from './yeu-cau-tra-vat-tu-tu-benh-nhan-update.component';

describe('YeuCauTraVatTuTuBenhNhanUpdateComponent', () => {
  let component: YeuCauTraVatTuTuBenhNhanUpdateComponent;
  let fixture: ComponentFixture<YeuCauTraVatTuTuBenhNhanUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YeuCauTraVatTuTuBenhNhanUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YeuCauTraVatTuTuBenhNhanUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
