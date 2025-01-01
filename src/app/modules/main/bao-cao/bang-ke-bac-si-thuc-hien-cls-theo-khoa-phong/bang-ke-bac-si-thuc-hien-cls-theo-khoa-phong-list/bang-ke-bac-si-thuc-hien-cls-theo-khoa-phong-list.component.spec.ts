import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BangKeBacSiThucHienClsTheoKhoaPhongListComponent } from './bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong-list.component';

describe('BangKeBacSiThucHienClsTheoKhoaPhongListComponent', () => {
  let component: BangKeBacSiThucHienClsTheoKhoaPhongListComponent;
  let fixture: ComponentFixture<BangKeBacSiThucHienClsTheoKhoaPhongListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BangKeBacSiThucHienClsTheoKhoaPhongListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BangKeBacSiThucHienClsTheoKhoaPhongListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
