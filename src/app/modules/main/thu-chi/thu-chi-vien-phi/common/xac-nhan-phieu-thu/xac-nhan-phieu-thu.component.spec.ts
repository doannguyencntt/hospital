import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XacNhanPhieuThuComponent } from './xac-nhan-phieu-thu.component';

describe('XacNhanPhieuThuComponent', () => {
  let component: XacNhanPhieuThuComponent;
  let fixture: ComponentFixture<XacNhanPhieuThuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XacNhanPhieuThuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XacNhanPhieuThuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
