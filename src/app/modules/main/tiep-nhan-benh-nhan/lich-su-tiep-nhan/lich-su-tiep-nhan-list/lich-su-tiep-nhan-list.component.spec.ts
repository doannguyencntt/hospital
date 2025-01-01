import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuTiepNhanListComponent } from './lich-su-tiep-nhan-list.component';

describe('LichSuTiepNhanListComponent', () => {
  let component: LichSuTiepNhanListComponent;
  let fixture: ComponentFixture<LichSuTiepNhanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichSuTiepNhanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuTiepNhanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
