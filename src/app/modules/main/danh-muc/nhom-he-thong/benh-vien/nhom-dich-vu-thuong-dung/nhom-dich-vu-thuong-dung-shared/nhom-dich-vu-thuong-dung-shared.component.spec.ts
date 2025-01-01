import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NhomDichVuThuongDungSharedComponent } from './nhom-dich-vu-thuong-dung-shared.component';

describe('NhomDichVuThuongDungSharedComponent', () => {
  let component: NhomDichVuThuongDungSharedComponent;
  let fixture: ComponentFixture<NhomDichVuThuongDungSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhomDichVuThuongDungSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhomDichVuThuongDungSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
