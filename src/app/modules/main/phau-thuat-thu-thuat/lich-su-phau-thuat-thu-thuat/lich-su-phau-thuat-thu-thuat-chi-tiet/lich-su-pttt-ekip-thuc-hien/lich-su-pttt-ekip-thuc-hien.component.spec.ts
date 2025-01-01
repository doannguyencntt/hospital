import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuPtttEkipThucHienComponent } from './lich-su-pttt-ekip-thuc-hien.component';

describe('LichSuPtttEkipThucHienComponent', () => {
  let component: LichSuPtttEkipThucHienComponent;
  let fixture: ComponentFixture<LichSuPtttEkipThucHienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichSuPtttEkipThucHienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuPtttEkipThucHienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
