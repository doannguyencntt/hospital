import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuKetQuaClsComponent } from './lich-su-ket-qua-cls.component';

describe('LichSuKetQuaClsComponent', () => {
  let component: LichSuKetQuaClsComponent;
  let fixture: ComponentFixture<LichSuKetQuaClsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichSuKetQuaClsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuKetQuaClsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
