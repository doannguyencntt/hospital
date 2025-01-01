import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhieuDieuTriTruyenMauComponent } from './phieu-dieu-tri-truyen-mau.component';

describe('PhieuDieuTriTruyenMauComponent', () => {
  let component: PhieuDieuTriTruyenMauComponent;
  let fixture: ComponentFixture<PhieuDieuTriTruyenMauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhieuDieuTriTruyenMauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhieuDieuTriTruyenMauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
