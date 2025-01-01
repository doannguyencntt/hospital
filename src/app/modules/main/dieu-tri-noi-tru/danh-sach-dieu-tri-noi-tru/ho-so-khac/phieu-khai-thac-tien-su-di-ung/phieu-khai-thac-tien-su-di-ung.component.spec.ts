import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhieuKhaiThacTienSuDiUngComponent } from './phieu-khai-thac-tien-su-di-ung.component';

describe('PhieuKhaiThacTienSuDiUngComponent', () => {
  let component: PhieuKhaiThacTienSuDiUngComponent;
  let fixture: ComponentFixture<PhieuKhaiThacTienSuDiUngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhieuKhaiThacTienSuDiUngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhieuKhaiThacTienSuDiUngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
