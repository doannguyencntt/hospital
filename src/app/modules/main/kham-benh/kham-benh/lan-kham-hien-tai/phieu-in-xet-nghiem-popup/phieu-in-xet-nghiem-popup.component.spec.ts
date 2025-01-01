import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PhieuInXetNghiemComponent } from './phieu-in-xet-nghiem-popup.component';


describe('PhieuInXetNghiemComponent', () => {
  let component: PhieuInXetNghiemComponent;
  let fixture: ComponentFixture<PhieuInXetNghiemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhieuInXetNghiemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhieuInXetNghiemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
