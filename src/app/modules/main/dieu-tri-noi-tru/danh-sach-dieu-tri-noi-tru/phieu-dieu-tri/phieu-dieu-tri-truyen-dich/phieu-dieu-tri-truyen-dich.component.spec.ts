import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhieuDieuTriTruyenDichComponent } from './phieu-dieu-tri-truyen-dich.component';

describe('PhieuDieuTriTruyenDichComponent', () => {
  let component: PhieuDieuTriTruyenDichComponent;
  let fixture: ComponentFixture<PhieuDieuTriTruyenDichComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhieuDieuTriTruyenDichComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhieuDieuTriTruyenDichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
