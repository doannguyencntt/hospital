import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HopDongKhamChonGoiKhamFilePopupComponent } from './goi-kham-suc-khoe-chon-file-popup.component';

describe('HopDongKhamChonGoiKhamFilePopupComponent', () => {
  let component: HopDongKhamChonGoiKhamFilePopupComponent;
  let fixture: ComponentFixture<HopDongKhamChonGoiKhamFilePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HopDongKhamChonGoiKhamFilePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HopDongKhamChonGoiKhamFilePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
