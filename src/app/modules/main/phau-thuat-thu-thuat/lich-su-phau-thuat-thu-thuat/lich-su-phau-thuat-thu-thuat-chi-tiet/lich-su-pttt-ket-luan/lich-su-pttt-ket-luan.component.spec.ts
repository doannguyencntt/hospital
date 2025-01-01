import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuPtttKetLuanComponent } from './lich-su-pttt-ket-luan.component';

describe('LichSuPtttKetLuanComponent', () => {
  let component: LichSuPtttKetLuanComponent;
  let fixture: ComponentFixture<LichSuPtttKetLuanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichSuPtttKetLuanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuPtttKetLuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
