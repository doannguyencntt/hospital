import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InBangKeChiPhiLSKhamBenhComponent } from './popup-in-bang-ke-chi-phi-kham-benh.component';

describe('InBangKeChiPhiLSKhamBenhComponent', () => {
  let component: InBangKeChiPhiLSKhamBenhComponent;
  let fixture: ComponentFixture<InBangKeChiPhiLSKhamBenhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InBangKeChiPhiLSKhamBenhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InBangKeChiPhiLSKhamBenhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
