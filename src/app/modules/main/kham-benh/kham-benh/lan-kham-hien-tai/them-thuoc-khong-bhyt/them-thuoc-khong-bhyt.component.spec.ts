import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemThuocKhongBhytComponent } from './them-thuoc-khong-bhyt.component';

describe('ThemThuocKhongBhytComponent', () => {
  let component: ThemThuocKhongBhytComponent;
  let fixture: ComponentFixture<ThemThuocKhongBhytComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemThuocKhongBhytComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemThuocKhongBhytComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
