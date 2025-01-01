import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhongDuyetPopupComponent } from './khong-duyet-popup.component';

describe('KhongDuyetPopupComponent', () => {
  let component: KhongDuyetPopupComponent;
  let fixture: ComponentFixture<KhongDuyetPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhongDuyetPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhongDuyetPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
