import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongTinDuocPhamPopupComponent } from './thong-tin-duoc-pham-popup.component';

describe('ThongTinDuocPhamPopupComponent', () => {
  let component: ThongTinDuocPhamPopupComponent;
  let fixture: ComponentFixture<ThongTinDuocPhamPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongTinDuocPhamPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinDuocPhamPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
