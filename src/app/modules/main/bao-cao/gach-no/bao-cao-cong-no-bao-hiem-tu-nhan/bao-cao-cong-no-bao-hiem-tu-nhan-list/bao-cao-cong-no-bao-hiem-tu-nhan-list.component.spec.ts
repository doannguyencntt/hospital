import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoCongNoBaoHiemTuNhanListComponent } from './bao-cao-cong-no-bao-hiem-tu-nhan-list.component';

describe('BaoCaoCongNoBaoHiemTuNhanListComponent', () => {
  let component: BaoCaoCongNoBaoHiemTuNhanListComponent;
  let fixture: ComponentFixture<BaoCaoCongNoBaoHiemTuNhanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaoCaoCongNoBaoHiemTuNhanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoCongNoBaoHiemTuNhanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
