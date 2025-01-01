import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ThongTinPhieuThuComponent } from './thong-tin-phieu-thu.component';
describe('ThongTinPhieuThuComponent', () => {
  let component: ThongTinPhieuThuComponent;
  let fixture: ComponentFixture<ThongTinPhieuThuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ThongTinPhieuThuComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinPhieuThuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
