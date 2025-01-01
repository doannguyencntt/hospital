import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ThongTinChiSoSinhTonComponent } from './thong-tin-chi-so-sinh-ton.component';


describe('ThongTinChiSoSinhTonComponent', () => {
  let component: ThongTinChiSoSinhTonComponent;
  let fixture: ComponentFixture<ThongTinChiSoSinhTonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ThongTinChiSoSinhTonComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinChiSoSinhTonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
