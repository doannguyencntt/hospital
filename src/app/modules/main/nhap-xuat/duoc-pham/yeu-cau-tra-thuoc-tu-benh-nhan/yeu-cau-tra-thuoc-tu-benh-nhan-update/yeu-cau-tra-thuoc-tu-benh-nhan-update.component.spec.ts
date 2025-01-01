import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YeuCauTraThuocTuBenhNhanUpdateComponent } from './yeu-cau-tra-thuoc-tu-benh-nhan-update.component';

describe('YeuCauTraThuocTuBenhNhanUpdateComponent', () => {
  let component: YeuCauTraThuocTuBenhNhanUpdateComponent;
  let fixture: ComponentFixture<YeuCauTraThuocTuBenhNhanUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YeuCauTraThuocTuBenhNhanUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YeuCauTraThuocTuBenhNhanUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
