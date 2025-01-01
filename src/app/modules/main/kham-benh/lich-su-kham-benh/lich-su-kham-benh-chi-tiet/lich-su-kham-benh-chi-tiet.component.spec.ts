import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuKhamBenhChiTietComponent } from './lich-su-kham-benh-chi-tiet.component';

describe('LichSuKhamBenhChiTietComponent', () => {
  let component: LichSuKhamBenhChiTietComponent;
  let fixture: ComponentFixture<LichSuKhamBenhChiTietComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichSuKhamBenhChiTietComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuKhamBenhChiTietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
