import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongTinNgoaiKhoaThamMyComponent } from './thong-tin-ngoai-khoa-tham-my.component';

describe('ThongTinNgoaiKhoaThamMyComponent', () => {
  let component: ThongTinNgoaiKhoaThamMyComponent;
  let fixture: ComponentFixture<ThongTinNgoaiKhoaThamMyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongTinNgoaiKhoaThamMyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinNgoaiKhoaThamMyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
