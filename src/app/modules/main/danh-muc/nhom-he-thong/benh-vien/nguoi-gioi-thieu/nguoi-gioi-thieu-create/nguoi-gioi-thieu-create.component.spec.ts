import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NguoiGioiThieuCreateComponent } from './nguoi-gioi-thieu-create.component';

describe('NguoiGioiThieuCreateComponent', () => {
  let component: NguoiGioiThieuCreateComponent;
  let fixture: ComponentFixture<NguoiGioiThieuCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NguoiGioiThieuCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NguoiGioiThieuCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
