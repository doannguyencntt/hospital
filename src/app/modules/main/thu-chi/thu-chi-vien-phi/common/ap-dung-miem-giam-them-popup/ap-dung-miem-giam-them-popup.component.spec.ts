import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ApDungMiemGiamThemComponent } from './ap-dung-miem-giam-them-popup.component';


describe('ApDungMiemGiamThemComponent', () => {
  let component: ApDungMiemGiamThemComponent;
  let fixture: ComponentFixture<ApDungMiemGiamThemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApDungMiemGiamThemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApDungMiemGiamThemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
