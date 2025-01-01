import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongTinRaVienNoiKhoaNhiComponent } from './thong-tin-ra-vien-noi-khoa-nhi.component';

describe('ThongTinRaVienNoiKhoaNhiComponent', () => {
  let component: ThongTinRaVienNoiKhoaNhiComponent;
  let fixture: ComponentFixture<ThongTinRaVienNoiKhoaNhiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongTinRaVienNoiKhoaNhiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinRaVienNoiKhoaNhiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
