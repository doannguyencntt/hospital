import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InPhieuHoanTraCompoment } from './in-phieu-hoan-tra.component';

describe('InPhieuHoanTraCompoment', () => {
  let component: InPhieuHoanTraCompoment;
  let fixture: ComponentFixture<InPhieuHoanTraCompoment>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InPhieuHoanTraCompoment ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InPhieuHoanTraCompoment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
