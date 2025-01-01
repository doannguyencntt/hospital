import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YeuCauTraVatTuTuBenhNhanSharedComponent } from './yeu-cau-tra-vat-tu-tu-benh-nhan-shared.component';

describe('YeuCauTraVatTuTuBenhNhanSharedComponent', () => {
  let component: YeuCauTraVatTuTuBenhNhanSharedComponent;
  let fixture: ComponentFixture<YeuCauTraVatTuTuBenhNhanSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YeuCauTraVatTuTuBenhNhanSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YeuCauTraVatTuTuBenhNhanSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
