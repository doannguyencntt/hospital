import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LichSuKhamBenhChiSoSinhTonNoiTruComponent } from './lich-su-kham-benh-chi-so-sinh-ton.component';
describe('LichSuKhamBenhChiSoSinhTonNoiTruComponent', () => {
  let component: LichSuKhamBenhChiSoSinhTonNoiTruComponent;
  let fixture: ComponentFixture<LichSuKhamBenhChiSoSinhTonNoiTruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichSuKhamBenhChiSoSinhTonNoiTruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuKhamBenhChiSoSinhTonNoiTruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
