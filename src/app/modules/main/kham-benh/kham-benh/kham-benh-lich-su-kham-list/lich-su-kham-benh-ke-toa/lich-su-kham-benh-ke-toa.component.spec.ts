import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuKhamBenhKeToaComponent } from './lich-su-kham-benh-ke-toa.component';

describe('LichSuKhamBenhKeToaComponent', () => {
  let component: LichSuKhamBenhKeToaComponent;
  let fixture: ComponentFixture<LichSuKhamBenhKeToaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichSuKhamBenhKeToaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuKhamBenhKeToaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
