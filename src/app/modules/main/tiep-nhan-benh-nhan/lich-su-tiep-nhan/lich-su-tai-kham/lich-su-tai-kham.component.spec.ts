import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuTaiKhamComponent } from './lich-su-tai-kham.component';

describe('LichSuTaiKhamComponent', () => {
  let component: LichSuTaiKhamComponent;
  let fixture: ComponentFixture<LichSuTaiKhamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichSuTaiKhamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuTaiKhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
