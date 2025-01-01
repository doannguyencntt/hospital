import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ThongTinPhieuThuNgoaiTruComponent } from './thong-tin-phieu-thu-ngoai-tru.component';

describe('ThongTinPhieuThuNgoaiTruComponent', () => {
  let component: ThongTinPhieuThuNgoaiTruComponent;
  let fixture: ComponentFixture<ThongTinPhieuThuNgoaiTruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ThongTinPhieuThuNgoaiTruComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinPhieuThuNgoaiTruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
