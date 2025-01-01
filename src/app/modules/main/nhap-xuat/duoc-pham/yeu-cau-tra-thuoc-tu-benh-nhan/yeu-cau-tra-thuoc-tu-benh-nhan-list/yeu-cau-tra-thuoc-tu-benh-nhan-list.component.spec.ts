import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YeuCauTraThuocTuBenhNhanListComponent } from './yeu-cau-tra-thuoc-tu-benh-nhan-list.component';

describe('YeuCauTraThuocTuBenhNhanListComponent', () => {
  let component: YeuCauTraThuocTuBenhNhanListComponent;
  let fixture: ComponentFixture<YeuCauTraThuocTuBenhNhanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YeuCauTraThuocTuBenhNhanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YeuCauTraThuocTuBenhNhanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
