import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ThongTinSanKhoaComponent } from './thong-tin-san-khoa-thuong.component';


describe('ThongTinSanKhoaComponent', () => {
  let component: ThongTinSanKhoaComponent;
  let fixture: ComponentFixture<ThongTinSanKhoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongTinSanKhoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinSanKhoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
