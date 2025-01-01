import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongTinChiTietGoiBaoHiemYTeComponent } from './thong-tin-chi-tiet-goi-bao-hiem-y-te.component';

describe('ThongTinChiTietGoiBaoHiemYTeComponent', () => {
  let component: ThongTinChiTietGoiBaoHiemYTeComponent;
  let fixture: ComponentFixture<ThongTinChiTietGoiBaoHiemYTeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongTinChiTietGoiBaoHiemYTeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinChiTietGoiBaoHiemYTeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
