import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongNoBaoHiemTuNhanListComponent } from './cong-no-bao-hiem-tu-nhan-list.component';

describe('CongNoBaoHiemTuNhanListComponent', () => {
  let component: CongNoBaoHiemTuNhanListComponent;
  let fixture: ComponentFixture<CongNoBaoHiemTuNhanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongNoBaoHiemTuNhanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongNoBaoHiemTuNhanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
