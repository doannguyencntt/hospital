import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuKhamBenhKhamKhacComponent } from './lich-su-kham-benh-kham-khac.component';

describe('LichSuKhamBenhKhamKhacComponent', () => {
  let component: LichSuKhamBenhKhamKhacComponent;
  let fixture: ComponentFixture<LichSuKhamBenhKhamKhacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichSuKhamBenhKhamKhacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuKhamBenhKhamKhacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
