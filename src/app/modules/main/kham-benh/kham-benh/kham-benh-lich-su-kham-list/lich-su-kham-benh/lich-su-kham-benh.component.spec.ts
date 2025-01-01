import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuKhamBenhComponent } from './lich-su-kham-benh.component';

describe('LichSuKhamBenhComponent', () => {
  let component: LichSuKhamBenhComponent;
  let fixture: ComponentFixture<LichSuKhamBenhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichSuKhamBenhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuKhamBenhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
