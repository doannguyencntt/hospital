import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ThongTinTreSoSinhComponent } from './thong-tin-tre-so-sinh.component';

describe('ThongTinTreSoSinhComponent', () => {
  let component: ThongTinTreSoSinhComponent;
  let fixture: ComponentFixture<ThongTinTreSoSinhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ThongTinTreSoSinhComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinTreSoSinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
