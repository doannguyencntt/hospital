import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongNoBenhNhanChuaThuComponent } from './cong-no-benh-nhan-chua-thu.component';

describe('CongNoBenhNhanChuaThuComponent', () => {
  let component: CongNoBenhNhanChuaThuComponent;
  let fixture: ComponentFixture<CongNoBenhNhanChuaThuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongNoBenhNhanChuaThuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongNoBenhNhanChuaThuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
