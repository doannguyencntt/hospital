import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ThongTinPhieuThuThuoc } from './thong-tin-phieu-da-thu.component';

describe('ThongTinPhieuThuThuoc', () => {
  let component: ThongTinPhieuThuThuoc;
  let fixture: ComponentFixture<ThongTinPhieuThuThuoc>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongTinPhieuThuThuoc ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinPhieuThuThuoc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
