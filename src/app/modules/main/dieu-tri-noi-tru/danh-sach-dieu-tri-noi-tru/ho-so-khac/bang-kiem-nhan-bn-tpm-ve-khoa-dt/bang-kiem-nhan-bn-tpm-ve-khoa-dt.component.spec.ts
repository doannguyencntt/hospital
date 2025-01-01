import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BangKiemNhanBnTpmVeKhoaDtComponent } from './bang-kiem-nhan-bn-tpm-ve-khoa-dt.component';

describe('BangKiemNhanBnTpmVeKhoaDtComponent', () => {
  let component: BangKiemNhanBnTpmVeKhoaDtComponent;
  let fixture: ComponentFixture<BangKiemNhanBnTpmVeKhoaDtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BangKiemNhanBnTpmVeKhoaDtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BangKiemNhanBnTpmVeKhoaDtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
