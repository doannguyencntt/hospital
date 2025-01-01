import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TiemChungSuDungGoiDichVuPopupComponent } from './tiem-chung-su-dung-goi-dich-vu-popup.component';


describe('TiemChungSuDungGoiDichVuPopupComponent', () => {
  let component: TiemChungSuDungGoiDichVuPopupComponent;
  let fixture: ComponentFixture<TiemChungSuDungGoiDichVuPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiemChungSuDungGoiDichVuPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiemChungSuDungGoiDichVuPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
