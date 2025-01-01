import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongNoBenhNhanDaThuComponent } from './cong-no-benh-nhan-da-thu.component';

describe('CongNoBenhNhanDaThuComponent', () => {
  let component: CongNoBenhNhanDaThuComponent;
  let fixture: ComponentFixture<CongNoBenhNhanDaThuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongNoBenhNhanDaThuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongNoBenhNhanDaThuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
