import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InBangKeChiPhiKhamBenhComponent } from './popup-in-bang-ke-chi-phi-kham-benh.component';

describe('InBangKeChiPhiKhamBenhComponent', () => {
  let component: InBangKeChiPhiKhamBenhComponent;
  let fixture: ComponentFixture<InBangKeChiPhiKhamBenhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InBangKeChiPhiKhamBenhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InBangKeChiPhiKhamBenhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
