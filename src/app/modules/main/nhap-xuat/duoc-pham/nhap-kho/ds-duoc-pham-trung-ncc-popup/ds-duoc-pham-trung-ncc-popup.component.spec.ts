import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DsDuocPhamTrungNccPopupComponent } from './ds-duoc-pham-trung-ncc-popup.component';

describe('DsDuocPhamTrungNccPopupComponent', () => {
  let component: DsDuocPhamTrungNccPopupComponent;
  let fixture: ComponentFixture<DsDuocPhamTrungNccPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DsDuocPhamTrungNccPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsDuocPhamTrungNccPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
