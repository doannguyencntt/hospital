import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BoPhanTonThuongPopupComponent } from './bo-phan-ton-thuong-popup.component';

describe('BoPhanTonThuongPopupComponent', () => {
  let component: BoPhanTonThuongPopupComponent;
  let fixture: ComponentFixture<BoPhanTonThuongPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoPhanTonThuongPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoPhanTonThuongPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
