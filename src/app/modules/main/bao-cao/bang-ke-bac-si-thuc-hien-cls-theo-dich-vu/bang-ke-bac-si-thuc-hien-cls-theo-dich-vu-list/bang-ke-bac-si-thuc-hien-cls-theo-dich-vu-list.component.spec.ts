import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BangKeBacSiThucHienClsTheoDichVuListComponent } from './bang-ke-bac-si-thuc-hien-cls-theo-dich-vu-list.component';

describe('BangKeBacSiThucHienClsTheoDichVuListComponent', () => {
  let component: BangKeBacSiThucHienClsTheoDichVuListComponent;
  let fixture: ComponentFixture<BangKeBacSiThucHienClsTheoDichVuListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BangKeBacSiThucHienClsTheoDichVuListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BangKeBacSiThucHienClsTheoDichVuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
