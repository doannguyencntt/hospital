import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ThongTinNhanVienPopupComponent } from './thong-tin-nhan-vien-popup.component';

describe('ThongTinNhanVienPopupComponent', () => {
  let component: ThongTinNhanVienPopupComponent;
  let fixture: ComponentFixture<ThongTinNhanVienPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongTinNhanVienPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinNhanVienPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
