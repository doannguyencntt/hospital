import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YeuCauTraVatTuTuBenhNhanCreateComponent } from './yeu-cau-tra-vat-tu-tu-benh-nhan-create.component';

describe('YeuCauTraVatTuTuBenhNhanCreateComponent', () => {
  let component: YeuCauTraVatTuTuBenhNhanCreateComponent;
  let fixture: ComponentFixture<YeuCauTraVatTuTuBenhNhanCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YeuCauTraVatTuTuBenhNhanCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YeuCauTraVatTuTuBenhNhanCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
