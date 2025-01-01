import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ApDungMiemGiamChoTungDichVuComponent } from './ap-dung-miem-giam-cho-tung-dv-popup.component';



describe('ApDungMiemGiamChoTungDichVuComponent', () => {
  let component: ApDungMiemGiamChoTungDichVuComponent;
  let fixture: ComponentFixture<ApDungMiemGiamChoTungDichVuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApDungMiemGiamChoTungDichVuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApDungMiemGiamChoTungDichVuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
