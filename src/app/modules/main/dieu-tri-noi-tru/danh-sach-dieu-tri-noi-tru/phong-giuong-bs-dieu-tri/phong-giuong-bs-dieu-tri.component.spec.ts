import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhongGiuongBsDieuTriComponent } from './phong-giuong-bs-dieu-tri.component';

describe('PhongGiuongBsDieuTriComponent', () => {
  let component: PhongGiuongBsDieuTriComponent;
  let fixture: ComponentFixture<PhongGiuongBsDieuTriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhongGiuongBsDieuTriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhongGiuongBsDieuTriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
