import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ThongTinChiTietDaThuComponent } from './thong-tin-chi-tiet-da-thu.component';

describe('ThongTinChiTietDaThuComponent', () => {
  let component: ThongTinChiTietDaThuComponent;
  let fixture: ComponentFixture<ThongTinChiTietDaThuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongTinChiTietDaThuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinChiTietDaThuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
