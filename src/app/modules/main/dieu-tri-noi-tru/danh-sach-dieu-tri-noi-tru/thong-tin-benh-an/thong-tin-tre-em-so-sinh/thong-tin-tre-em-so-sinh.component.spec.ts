import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ThongTinBenhAnTreEmSoSinhComponent } from './thong-tin-tre-em-so-sinh.component';
describe('ThongTinBenhAnTreEmSoSinhComponent', () => {
  let component: ThongTinBenhAnTreEmSoSinhComponent;
  let fixture: ComponentFixture<ThongTinBenhAnTreEmSoSinhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongTinBenhAnTreEmSoSinhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinBenhAnTreEmSoSinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
