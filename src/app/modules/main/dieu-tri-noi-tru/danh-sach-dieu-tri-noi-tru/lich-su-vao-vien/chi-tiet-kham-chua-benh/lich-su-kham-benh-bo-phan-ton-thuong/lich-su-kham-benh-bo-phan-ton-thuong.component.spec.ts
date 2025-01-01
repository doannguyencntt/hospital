import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LichSuKhamBenhBoPhanTonThuongNoiTruComponent } from './lich-su-kham-benh-bo-phan-ton-thuong.component';

describe('LichSuKhamBenhBoPhanTonThuongNoiTruComponent', () => {
  let component: LichSuKhamBenhBoPhanTonThuongNoiTruComponent;
  let fixture: ComponentFixture<LichSuKhamBenhBoPhanTonThuongNoiTruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichSuKhamBenhBoPhanTonThuongNoiTruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuKhamBenhBoPhanTonThuongNoiTruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
