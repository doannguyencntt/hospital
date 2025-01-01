import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuChuanDoanComponent } from './lich-su-chuan-doan.component';

describe('LichSuChuanDoanComponent', () => {
  let component: LichSuChuanDoanComponent;
  let fixture: ComponentFixture<LichSuChuanDoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichSuChuanDoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuChuanDoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
