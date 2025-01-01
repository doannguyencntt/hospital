import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NguoiGioiThieuListComponent } from './nguoi-gioi-thieu-list.component';

describe('NguoiGioiThieuListComponent', () => {
  let component: NguoiGioiThieuListComponent;
  let fixture: ComponentFixture<NguoiGioiThieuListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NguoiGioiThieuListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NguoiGioiThieuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
