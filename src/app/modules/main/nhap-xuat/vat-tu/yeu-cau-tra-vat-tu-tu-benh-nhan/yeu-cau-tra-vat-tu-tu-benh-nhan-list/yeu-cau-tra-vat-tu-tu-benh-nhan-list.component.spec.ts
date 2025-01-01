import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YeuCauTraVatTuTuBenhNhanListComponent } from './yeu-cau-tra-vat-tu-tu-benh-nhan-list.component';

describe('YeuCauTraVatTuTuBenhNhanListComponent', () => {
  let component: YeuCauTraVatTuTuBenhNhanListComponent;
  let fixture: ComponentFixture<YeuCauTraVatTuTuBenhNhanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YeuCauTraVatTuTuBenhNhanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YeuCauTraVatTuTuBenhNhanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
