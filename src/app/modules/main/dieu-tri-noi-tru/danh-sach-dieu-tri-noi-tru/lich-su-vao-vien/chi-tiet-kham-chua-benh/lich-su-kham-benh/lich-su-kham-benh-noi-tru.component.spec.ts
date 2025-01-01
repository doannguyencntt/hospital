import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuKhamBenhNoiTruComponent } from './lich-su-kham-benh-noi-tru.component';

describe('LichSuKhamBenhNoiTruComponent', () => {
  let component: LichSuKhamBenhNoiTruComponent;
  let fixture: ComponentFixture<LichSuKhamBenhNoiTruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichSuKhamBenhNoiTruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuKhamBenhNoiTruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
