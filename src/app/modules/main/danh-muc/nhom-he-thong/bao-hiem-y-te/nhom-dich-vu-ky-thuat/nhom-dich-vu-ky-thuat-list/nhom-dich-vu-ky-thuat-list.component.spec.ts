import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NhomDichVuKyThuatListComponent } from './nhom-dich-vu-ky-thuat-list.component';

describe('NhomDichVuKyThuatListComponent', () => {
  let component: NhomDichVuKyThuatListComponent;
  let fixture: ComponentFixture<NhomDichVuKyThuatListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhomDichVuKyThuatListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhomDichVuKyThuatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
