import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuKhamBenhKetQuaClsComponent } from './lich-su-kham-benh-ket-qua-cls.component';

describe('LichSuKhamBenhKetQuaClsComponent', () => {
  let component: LichSuKhamBenhKetQuaClsComponent;
  let fixture: ComponentFixture<LichSuKhamBenhKetQuaClsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichSuKhamBenhKetQuaClsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuKhamBenhKetQuaClsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
