import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LichSuKhamBenhKeToaNoiTruComponent } from './lich-su-kham-benh-ke-toa.component';
describe('LichSuKhamBenhKeToaNoiTruComponent', () => {
  let component: LichSuKhamBenhKeToaNoiTruComponent;
  let fixture: ComponentFixture<LichSuKhamBenhKeToaNoiTruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichSuKhamBenhKeToaNoiTruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuKhamBenhKeToaNoiTruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
