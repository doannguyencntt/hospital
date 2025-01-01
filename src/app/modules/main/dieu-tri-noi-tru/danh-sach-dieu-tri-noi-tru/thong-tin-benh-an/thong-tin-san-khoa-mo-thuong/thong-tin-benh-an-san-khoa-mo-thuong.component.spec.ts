import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongTinBenhAnSanKhoaMoThuongComponent } from './thong-tin-benh-an-san-khoa-mo-thuong.component';

describe('ThongTinBenhAnSanKhoaMoThuongComponent', () => {
  let component: ThongTinBenhAnSanKhoaMoThuongComponent;
  let fixture: ComponentFixture<ThongTinBenhAnSanKhoaMoThuongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongTinBenhAnSanKhoaMoThuongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinBenhAnSanKhoaMoThuongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
