import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongNoBenhNhanHetNoComponent } from './cong-no-benh-nhan-het-no.component';

describe('CongNoBenhNhanHetNoComponent', () => {
  let component: CongNoBenhNhanHetNoComponent;
  let fixture: ComponentFixture<CongNoBenhNhanHetNoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongNoBenhNhanHetNoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongNoBenhNhanHetNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
