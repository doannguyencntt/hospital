import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DichVuKyThuatListComponent } from './dich-vu-ky-thuat-list.component';

describe('DichVuKyThuatListComponent', () => {
  let component: DichVuKyThuatListComponent;
  let fixture: ComponentFixture<DichVuKyThuatListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DichVuKyThuatListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DichVuKyThuatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
