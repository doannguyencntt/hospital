import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuPhauThuatThuThuatListComponent } from './lich-su-phau-thuat-thu-thuat-list.component';

describe('LichSuPhauThuatThuThuatListComponent', () => {
  let component: LichSuPhauThuatThuThuatListComponent;
  let fixture: ComponentFixture<LichSuPhauThuatThuThuatListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichSuPhauThuatThuThuatListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuPhauThuatThuThuatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
