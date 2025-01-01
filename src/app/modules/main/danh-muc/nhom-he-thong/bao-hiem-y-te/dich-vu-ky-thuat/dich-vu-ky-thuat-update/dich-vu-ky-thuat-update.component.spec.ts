import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DichVuKyThuatUpdateComponent } from './dich-vu-ky-thuat-update.component';

describe('DichVuKyThuatUpdateComponent', () => {
  let component: DichVuKyThuatUpdateComponent;
  let fixture: ComponentFixture<DichVuKyThuatUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DichVuKyThuatUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DichVuKyThuatUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
