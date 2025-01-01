import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NhomDichVuThuongDungUpdateComponent } from './nhom-dich-vu-thuong-dung-update.component';

describe('NhomDichVuThuongDungUpdateComponent', () => {
  let component: NhomDichVuThuongDungUpdateComponent;
  let fixture: ComponentFixture<NhomDichVuThuongDungUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhomDichVuThuongDungUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhomDichVuThuongDungUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
