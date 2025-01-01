import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongTinPhuKhoaComponent } from './thong-tin-phu-khoa.component';

describe('ThongTinPhuKhoaComponent', () => {
  let component: ThongTinPhuKhoaComponent;
  let fixture: ComponentFixture<ThongTinPhuKhoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongTinPhuKhoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinPhuKhoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
