import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhamBenhDangKhamTheoPhongKhamChiTietComponent } from './kham-benh-dang-kham-theo-phong-kham-chi-tiet.component';

describe('KhamBenhDangKhamTheoPhongKhamChiTietComponent', () => {
  let component: KhamBenhDangKhamTheoPhongKhamChiTietComponent;
  let fixture: ComponentFixture<KhamBenhDangKhamTheoPhongKhamChiTietComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhamBenhDangKhamTheoPhongKhamChiTietComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhamBenhDangKhamTheoPhongKhamChiTietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
