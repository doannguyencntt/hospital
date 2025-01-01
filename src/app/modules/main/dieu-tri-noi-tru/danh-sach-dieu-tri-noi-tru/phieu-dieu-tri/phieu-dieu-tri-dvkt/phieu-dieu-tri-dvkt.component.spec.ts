import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhieuDieuTriDvktComponent } from './phieu-dieu-tri-dvkt.component';

describe('PhieuDieuTriDvktComponent', () => {
  let component: PhieuDieuTriDvktComponent;
  let fixture: ComponentFixture<PhieuDieuTriDvktComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhieuDieuTriDvktComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhieuDieuTriDvktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
