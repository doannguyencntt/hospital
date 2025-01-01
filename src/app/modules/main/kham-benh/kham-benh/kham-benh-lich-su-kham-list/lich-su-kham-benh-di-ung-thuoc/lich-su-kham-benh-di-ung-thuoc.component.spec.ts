import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuKhamBenhDiUngThuocComponent } from './lich-su-kham-benh-di-ung-thuoc.component';

describe('LichSuKhamBenhDiUngThuocComponent', () => {
  let component: LichSuKhamBenhDiUngThuocComponent;
  let fixture: ComponentFixture<LichSuKhamBenhDiUngThuocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichSuKhamBenhDiUngThuocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuKhamBenhDiUngThuocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
