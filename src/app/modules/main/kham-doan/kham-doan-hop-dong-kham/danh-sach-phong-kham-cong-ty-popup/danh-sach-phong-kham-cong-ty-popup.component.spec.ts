import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DanhSachPhongKhamCongTyComponent } from './danh-sach-phong-kham-cong-ty-popup.component';


describe('DanhSachPhongKhamCongTyComponent', () => {
  let component: DanhSachPhongKhamCongTyComponent;
  let fixture: ComponentFixture<DanhSachPhongKhamCongTyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhSachPhongKhamCongTyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachPhongKhamCongTyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
