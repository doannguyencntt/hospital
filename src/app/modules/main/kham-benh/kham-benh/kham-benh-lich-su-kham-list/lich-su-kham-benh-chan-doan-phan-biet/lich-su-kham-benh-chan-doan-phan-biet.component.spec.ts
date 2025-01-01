import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuKhamBenhChanDoanPhanBietComponent } from './lich-su-kham-benh-chan-doan-phan-biet.component';

describe('LichSuKhamBenhChanDoanPhanBietComponent', () => {
  let component: LichSuKhamBenhChanDoanPhanBietComponent;
  let fixture: ComponentFixture<LichSuKhamBenhChanDoanPhanBietComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichSuKhamBenhChanDoanPhanBietComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuKhamBenhChanDoanPhanBietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
