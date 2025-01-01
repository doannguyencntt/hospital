import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NguoiGioiThieuSharedComponent } from './nguoi-gioi-thieu-shared.component';

describe('NguoiGioiThieuSharedComponent', () => {
  let component: NguoiGioiThieuSharedComponent;
  let fixture: ComponentFixture<NguoiGioiThieuSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NguoiGioiThieuSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NguoiGioiThieuSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
