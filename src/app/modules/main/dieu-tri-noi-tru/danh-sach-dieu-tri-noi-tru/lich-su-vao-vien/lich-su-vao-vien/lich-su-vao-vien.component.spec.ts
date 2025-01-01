import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuVaoVienComponent } from './lich-su-vao-vien.component';

describe('LichSuVaoVienComponent', () => {
  let component: LichSuVaoVienComponent;
  let fixture: ComponentFixture<LichSuVaoVienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichSuVaoVienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuVaoVienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
