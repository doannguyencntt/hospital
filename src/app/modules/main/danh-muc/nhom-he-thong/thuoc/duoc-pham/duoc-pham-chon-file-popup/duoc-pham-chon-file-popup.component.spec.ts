import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuocPhamChonFilePopupComponent } from './duoc-pham-chon-file-popup.component';

describe('DuocPhamChonFilePopupComponent', () => {
  let component: DuocPhamChonFilePopupComponent;
  let fixture: ComponentFixture<DuocPhamChonFilePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuocPhamChonFilePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuocPhamChonFilePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
