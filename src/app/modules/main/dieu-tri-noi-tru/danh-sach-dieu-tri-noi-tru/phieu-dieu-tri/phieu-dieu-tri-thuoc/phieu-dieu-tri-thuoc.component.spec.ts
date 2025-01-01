import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhieuDieuTriThuocComponent } from './phieu-dieu-tri-thuoc.component';

describe('PhieuDieuTriThuocComponent', () => {
  let component: PhieuDieuTriThuocComponent;
  let fixture: ComponentFixture<PhieuDieuTriThuocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhieuDieuTriThuocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhieuDieuTriThuocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
