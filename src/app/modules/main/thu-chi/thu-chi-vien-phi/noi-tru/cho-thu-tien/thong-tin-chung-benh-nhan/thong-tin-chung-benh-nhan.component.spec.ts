import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongTinChungBenhNhanComponent } from './thong-tin-chung-benh-nhan.component';

describe('ThongTinChungBenhNhanComponent', () => {
  let component: ThongTinChungBenhNhanComponent;
  let fixture: ComponentFixture<ThongTinChungBenhNhanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongTinChungBenhNhanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinChungBenhNhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
