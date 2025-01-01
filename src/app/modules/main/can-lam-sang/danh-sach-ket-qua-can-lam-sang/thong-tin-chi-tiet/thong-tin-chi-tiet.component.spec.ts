import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongTinChiTietComponent } from './thong-tin-chi-tiet.component';

describe('ThongTinChiTietComponent', () => {
  let component: ThongTinChiTietComponent;
  let fixture: ComponentFixture<ThongTinChiTietComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongTinChiTietComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinChiTietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
