import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NguoiGioiThieuUpdateComponent } from './nguoi-gioi-thieu-update.component';

describe('NguoiGioiThieuUpdateComponent', () => {
  let component: NguoiGioiThieuUpdateComponent;
  let fixture: ComponentFixture<NguoiGioiThieuUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NguoiGioiThieuUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NguoiGioiThieuUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
