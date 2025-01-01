import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhieuDieuTriSuatAnComponent } from './phieu-dieu-tri-suat-an.component';

describe('PhieuDieuTriSuatAnComponent', () => {
  let component: PhieuDieuTriSuatAnComponent;
  let fixture: ComponentFixture<PhieuDieuTriSuatAnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhieuDieuTriSuatAnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhieuDieuTriSuatAnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
