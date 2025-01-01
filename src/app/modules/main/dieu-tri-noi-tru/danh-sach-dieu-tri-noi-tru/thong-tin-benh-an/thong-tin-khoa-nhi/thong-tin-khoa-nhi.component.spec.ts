import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ThongTinBenhAnKhoaNhiComponent } from './thong-tin-khoa-nhi.component';

describe('ThongTinBenhAnKhoaNhiComponent', () => {
  let component: ThongTinBenhAnKhoaNhiComponent;
  let fixture: ComponentFixture<ThongTinBenhAnKhoaNhiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongTinBenhAnKhoaNhiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinBenhAnKhoaNhiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
