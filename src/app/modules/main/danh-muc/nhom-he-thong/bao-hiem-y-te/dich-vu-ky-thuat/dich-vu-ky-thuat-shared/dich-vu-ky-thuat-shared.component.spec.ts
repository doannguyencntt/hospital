import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DichVuKyThuatSharedComponent } from './dich-vu-ky-thuat-shared.component';

describe('DichVuKyThuatSharedComponent', () => {
  let component: DichVuKyThuatSharedComponent;
  let fixture: ComponentFixture<DichVuKyThuatSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DichVuKyThuatSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DichVuKyThuatSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
