import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoTinhThoiGianSuDungDvCuaKhListComponent } from './bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh-list.component';

describe('BaoCaoTinhThoiGianSuDungDvCuaKhListComponent', () => {
  let component: BaoCaoTinhThoiGianSuDungDvCuaKhListComponent;
  let fixture: ComponentFixture<BaoCaoTinhThoiGianSuDungDvCuaKhListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaoCaoTinhThoiGianSuDungDvCuaKhListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoTinhThoiGianSuDungDvCuaKhListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
