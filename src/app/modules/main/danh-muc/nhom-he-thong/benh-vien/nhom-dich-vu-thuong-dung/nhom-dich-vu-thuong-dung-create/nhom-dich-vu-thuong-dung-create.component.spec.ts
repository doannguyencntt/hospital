import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NhomDichVuThuongDungCreateComponent } from './nhom-dich-vu-thuong-dung-create.component';

describe('NhomDichVuThuongDungCreateComponent', () => {
  let component: NhomDichVuThuongDungCreateComponent;
  let fixture: ComponentFixture<NhomDichVuThuongDungCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhomDichVuThuongDungCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhomDichVuThuongDungCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
