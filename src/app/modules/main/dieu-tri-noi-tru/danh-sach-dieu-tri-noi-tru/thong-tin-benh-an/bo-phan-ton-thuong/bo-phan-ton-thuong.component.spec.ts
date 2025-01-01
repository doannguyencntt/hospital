import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BoPhanTonThuongComponent } from './bo-phan-ton-thuong.component';


describe('BoPhanTonThuongComponent', () => {
  let component: BoPhanTonThuongComponent;
  let fixture: ComponentFixture<BoPhanTonThuongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoPhanTonThuongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoPhanTonThuongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
