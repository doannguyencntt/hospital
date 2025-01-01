import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SoSinhSauKhiSinhComponent } from './so-sinh-sau-khi-sinh.component';

describe('SoSinhSauKhiSinhComponent', () => {
  let component: SoSinhSauKhiSinhComponent;
  let fixture: ComponentFixture<SoSinhSauKhiSinhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SoSinhSauKhiSinhComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoSinhSauKhiSinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
