import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('YeuCauXetNghiemLaiComponent', () => {
  let component: YeuCauXetNghiemLaiComponent;
  let fixture: ComponentFixture<YeuCauXetNghiemLaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YeuCauXetNghiemLaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YeuCauXetNghiemLaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
