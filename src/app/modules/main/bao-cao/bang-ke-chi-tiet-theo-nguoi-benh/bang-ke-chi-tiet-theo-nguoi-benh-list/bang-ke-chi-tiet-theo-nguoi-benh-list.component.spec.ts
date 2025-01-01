import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BangKeChiTietTheoNguoiBenhListComponent } from './bang-ke-chi-tiet-theo-nguoi-benh-list.component';

describe('BangKeChiTietTheoNguoiBenhListComponent', () => {
  let component: BangKeChiTietTheoNguoiBenhListComponent;
  let fixture: ComponentFixture<BangKeChiTietTheoNguoiBenhListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BangKeChiTietTheoNguoiBenhListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BangKeChiTietTheoNguoiBenhListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
