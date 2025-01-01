import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YeuCauTraThuocTuBenhNhanCreateComponent } from './yeu-cau-tra-thuoc-tu-benh-nhan-create.component';

describe('YeuCauTraThuocTuBenhNhanCreateComponent', () => {
  let component: YeuCauTraThuocTuBenhNhanCreateComponent;
  let fixture: ComponentFixture<YeuCauTraThuocTuBenhNhanCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YeuCauTraThuocTuBenhNhanCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YeuCauTraThuocTuBenhNhanCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
