import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NhanMauXetNghiemListComponent } from './nhan-mau-xet-nghiem-list.component';

describe('NhanMauXetNghiemListComponent', () => {
  let component: NhanMauXetNghiemListComponent;
  let fixture: ComponentFixture<NhanMauXetNghiemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhanMauXetNghiemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhanMauXetNghiemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
