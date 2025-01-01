import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YeuCauTraThuocTuBenhNhanSharedComponent } from './yeu-cau-tra-thuoc-tu-benh-nhan-shared.component';

describe('YeuCauTraThuocTuBenhNhanSharedComponent', () => {
  let component: YeuCauTraThuocTuBenhNhanSharedComponent;
  let fixture: ComponentFixture<YeuCauTraThuocTuBenhNhanSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YeuCauTraThuocTuBenhNhanSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YeuCauTraThuocTuBenhNhanSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
