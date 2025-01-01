import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongTinBenhAnPhuKhoaComponent } from './thong-tin-benh-an-phu-khoa.component';

describe('ThongTinBenhAnPhuKhoaComponent', () => {
  let component: ThongTinBenhAnPhuKhoaComponent;
  let fixture: ComponentFixture<ThongTinBenhAnPhuKhoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongTinBenhAnPhuKhoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinBenhAnPhuKhoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
