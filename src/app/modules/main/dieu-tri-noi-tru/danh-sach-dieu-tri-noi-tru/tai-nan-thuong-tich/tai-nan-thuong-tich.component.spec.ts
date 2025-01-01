import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaiNanThuongTichComponent } from './tai-nan-thuong-tich.component';

describe('TaiNanThuongTichComponent', () => {
  let component: TaiNanThuongTichComponent;
  let fixture: ComponentFixture<TaiNanThuongTichComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaiNanThuongTichComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaiNanThuongTichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
