import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ThongTinPhieuPdfPopupComponent } from './thong-tin-phieu-pdf-popup.component';
describe('LayMauXetNghiemKetQuaPopupComponent', () => {
  let component: ThongTinPhieuPdfPopupComponent;
  let fixture: ComponentFixture<ThongTinPhieuPdfPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongTinPhieuPdfPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinPhieuPdfPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
