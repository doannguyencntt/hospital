import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoSoNhanVienShareComponent } from './ho-so-nhan-vien-share.component';

describe('HoSoNhanVienShareComponent', () => {
  let component: HoSoNhanVienShareComponent;
  let fixture: ComponentFixture<HoSoNhanVienShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoSoNhanVienShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoSoNhanVienShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
