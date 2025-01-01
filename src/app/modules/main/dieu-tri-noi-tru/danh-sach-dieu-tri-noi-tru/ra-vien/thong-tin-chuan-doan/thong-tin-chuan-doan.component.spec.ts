import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ThognTinChuanDoanComponent } from './thong-tin-chuan-doan.component';

describe('ThognTinChuanDoanComponent', () => {
  let component: ThognTinChuanDoanComponent;
  let fixture: ComponentFixture<ThognTinChuanDoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThognTinChuanDoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThognTinChuanDoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
