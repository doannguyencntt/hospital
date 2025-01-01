import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TongKetBenhAnSanKhoaComponent } from './tong-ket-benh-an-san-khoa.component';

describe('TongKetBenhAnSanKhoaComponent', () => {
  let component: TongKetBenhAnSanKhoaComponent;
  let fixture: ComponentFixture<TongKetBenhAnSanKhoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TongKetBenhAnSanKhoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TongKetBenhAnSanKhoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
