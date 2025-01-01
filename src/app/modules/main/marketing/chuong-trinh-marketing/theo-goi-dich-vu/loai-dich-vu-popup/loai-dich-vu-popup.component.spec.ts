import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaiDichVuPopupComponent } from './loai-dich-vu-popup.component';

describe('LoaiDichVuPopupComponent', () => {
  let component: LoaiDichVuPopupComponent;
  let fixture: ComponentFixture<LoaiDichVuPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaiDichVuPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaiDichVuPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
