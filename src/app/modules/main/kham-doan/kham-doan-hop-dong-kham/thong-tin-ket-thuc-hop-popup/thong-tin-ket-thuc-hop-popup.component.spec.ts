import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ThongTinKetThucHopDongPopupComponent } from './thong-tin-ket-thuc-hop-popup.component';

describe('ThongTinKetThucHopDongPopupComponent', () => {
  let component: ThongTinKetThucHopDongPopupComponent;
  let fixture: ComponentFixture<ThongTinKetThucHopDongPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongTinKetThucHopDongPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinKetThucHopDongPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
