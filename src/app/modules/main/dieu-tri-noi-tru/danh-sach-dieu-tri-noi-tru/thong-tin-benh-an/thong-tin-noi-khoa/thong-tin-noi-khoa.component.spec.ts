import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongTinBenhAnNoiKhoaComponent } from './thong-tin-noi-khoa.component';

describe('ThongTinBenhAnNoiKhoaComponent', () => {
  let component: ThongTinBenhAnNoiKhoaComponent;
  let fixture: ComponentFixture<ThongTinBenhAnNoiKhoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongTinBenhAnNoiKhoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinBenhAnNoiKhoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
