import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TongKetBenhAnNgoaiKhoaComponent } from './tong-ket-benh-an-ngoai-khoa.component';

describe('TongKetBenhAnNgoaiKhoaComponent', () => {
  let component: TongKetBenhAnNgoaiKhoaComponent;
  let fixture: ComponentFixture<TongKetBenhAnNgoaiKhoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TongKetBenhAnNgoaiKhoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TongKetBenhAnNgoaiKhoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
