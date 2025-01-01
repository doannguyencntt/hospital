import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhamBenhDangKhamTheoPhongKhamComponent } from './kham-benh-dang-kham-theo-phong-kham.component';

describe('KhamBenhDangKhamTheoPhongKhamComponent', () => {
  let component: KhamBenhDangKhamTheoPhongKhamComponent;
  let fixture: ComponentFixture<KhamBenhDangKhamTheoPhongKhamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhamBenhDangKhamTheoPhongKhamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhamBenhDangKhamTheoPhongKhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
