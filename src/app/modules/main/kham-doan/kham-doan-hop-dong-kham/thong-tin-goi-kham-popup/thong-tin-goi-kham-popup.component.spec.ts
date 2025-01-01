import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ThongTinGoiKhamPopupComponent } from './thong-tin-goi-kham-popup.component';

describe('ThongTinGoiKhamPopupComponent', () => {
  let component: ThongTinGoiKhamPopupComponent;
  let fixture: ComponentFixture<ThongTinGoiKhamPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongTinGoiKhamPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinGoiKhamPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
