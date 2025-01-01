import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongTinDichVuChuaDuocXacNhanComponent } from './thong-tin-dich-vu-chua-duoc-xac-nhan.component';

describe('ThongTinDichVuChuaDuocXacNhanComponent', () => {
  let component: ThongTinDichVuChuaDuocXacNhanComponent;
  let fixture: ComponentFixture<ThongTinDichVuChuaDuocXacNhanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongTinDichVuChuaDuocXacNhanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinDichVuChuaDuocXacNhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
