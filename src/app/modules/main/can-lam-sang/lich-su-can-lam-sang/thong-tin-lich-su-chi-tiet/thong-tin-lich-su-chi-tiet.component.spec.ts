import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongTinLichSuChiTietComponent } from './thong-tin-lich-su-chi-tiet.component';

describe('ThongTinLichSuChiTietComponent', () => {
  let component: ThongTinLichSuChiTietComponent;
  let fixture: ComponentFixture<ThongTinLichSuChiTietComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongTinLichSuChiTietComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinLichSuChiTietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
