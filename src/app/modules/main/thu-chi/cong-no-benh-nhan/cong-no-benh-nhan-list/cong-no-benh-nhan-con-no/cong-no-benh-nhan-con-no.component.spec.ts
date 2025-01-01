import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongNoBenhNhanConNoComponent } from './cong-no-benh-nhan-con-no.component';

describe('CongNoBenhNhanConNoComponent', () => {
  let component: CongNoBenhNhanConNoComponent;
  let fixture: ComponentFixture<CongNoBenhNhanConNoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongNoBenhNhanConNoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongNoBenhNhanConNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
