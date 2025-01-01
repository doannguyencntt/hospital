import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TiemChungNhomDichVuLoiPopupComponent } from './tiem-chung-nhom-dich-vu-loi-popup.component';

describe('LTiemChungNhomDichVuLoiPopupComponent', () => {
  let component: TiemChungNhomDichVuLoiPopupComponent;
  let fixture: ComponentFixture<TiemChungNhomDichVuLoiPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiemChungNhomDichVuLoiPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiemChungNhomDichVuLoiPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
