import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuTiepNhanChiTietComponent } from './lich-su-tiep-nhan-chi-tiet.component';

describe('LichSuTiepNhanChiTietComponent', () => {
  let component: LichSuTiepNhanChiTietComponent;
  let fixture: ComponentFixture<LichSuTiepNhanChiTietComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichSuTiepNhanChiTietComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuTiepNhanChiTietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
