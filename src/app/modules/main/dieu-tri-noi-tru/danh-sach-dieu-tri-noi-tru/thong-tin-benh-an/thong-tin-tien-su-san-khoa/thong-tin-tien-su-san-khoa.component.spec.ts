import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ThongTinTienSuSanKhoaComponent } from './thong-tin-tien-su-san-khoa.component';


describe('ThongTinTienSuSanKhoaComponent', () => {
  let component: ThongTinTienSuSanKhoaComponent;
  let fixture: ComponentFixture<ThongTinTienSuSanKhoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ThongTinTienSuSanKhoaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinTienSuSanKhoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
