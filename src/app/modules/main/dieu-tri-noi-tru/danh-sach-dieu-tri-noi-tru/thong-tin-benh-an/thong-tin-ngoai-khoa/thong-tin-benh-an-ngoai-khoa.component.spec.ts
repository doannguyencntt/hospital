import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongTinBenhAnNgoaiKhoaComponent } from './thong-tin-benh-an-ngoai-khoa.component';

describe('ThongTinBenhAnNgoaiKhoaComponent', () => {
  let component: ThongTinBenhAnNgoaiKhoaComponent;
  let fixture: ComponentFixture<ThongTinBenhAnNgoaiKhoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongTinBenhAnNgoaiKhoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinBenhAnNgoaiKhoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
