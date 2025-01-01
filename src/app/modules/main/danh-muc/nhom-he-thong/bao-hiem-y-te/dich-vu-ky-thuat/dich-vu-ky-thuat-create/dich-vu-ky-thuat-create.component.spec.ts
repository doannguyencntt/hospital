import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DichVuKyThuatCreateComponent } from './dich-vu-ky-thuat-create.component';

describe('DichVuKyThuatCreateComponent', () => {
  let component: DichVuKyThuatCreateComponent;
  let fixture: ComponentFixture<DichVuKyThuatCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DichVuKyThuatCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DichVuKyThuatCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
