import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuKhamBenhTienSuBenhComponent } from './lich-su-kham-benh-tien-su-benh.component';

describe('LichSuKhamBenhTienSuBenhComponent', () => {
  let component: LichSuKhamBenhTienSuBenhComponent;
  let fixture: ComponentFixture<LichSuKhamBenhTienSuBenhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichSuKhamBenhTienSuBenhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuKhamBenhTienSuBenhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
