import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TongKetBenhAnNoiKhoaComponent } from './tong-ket-benh-an-noi-khoa.component';

describe('TongKetBenhAnNoiKhoaComponent', () => {
  let component: TongKetBenhAnNoiKhoaComponent;
  let fixture: ComponentFixture<TongKetBenhAnNoiKhoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TongKetBenhAnNoiKhoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TongKetBenhAnNoiKhoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
