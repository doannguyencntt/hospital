import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuKhamBenhKetLuanComponent } from './lich-su-kham-benh-ket-luan.component';

describe('LichSuKhamBenhKetLuanComponent', () => {
  let component: LichSuKhamBenhKetLuanComponent;
  let fixture: ComponentFixture<LichSuKhamBenhKetLuanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichSuKhamBenhKetLuanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuKhamBenhKetLuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
