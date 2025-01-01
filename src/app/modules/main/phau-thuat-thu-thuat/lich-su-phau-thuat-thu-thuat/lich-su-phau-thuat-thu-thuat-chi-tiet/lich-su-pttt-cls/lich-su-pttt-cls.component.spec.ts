import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuPtttClsComponent } from './lich-su-pttt-cls.component';

describe('LichSuPtttClsComponent', () => {
  let component: LichSuPtttClsComponent;
  let fixture: ComponentFixture<LichSuPtttClsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichSuPtttClsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuPtttClsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
