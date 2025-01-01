import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuKhamBenhKhamBenhComponent } from './lich-su-kham-benh-kham-benh.component';

describe('LichSuKhamBenhKhamBenhComponent', () => {
  let component: LichSuKhamBenhKhamBenhComponent;
  let fixture: ComponentFixture<LichSuKhamBenhKhamBenhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichSuKhamBenhKhamBenhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuKhamBenhKhamBenhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
