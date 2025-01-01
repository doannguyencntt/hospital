import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToaThuocMauSharedComponent } from './toa-thuoc-mau-shared.component';

describe('ToaThuocMauSharedComponent', () => {
  let component: ToaThuocMauSharedComponent;
  let fixture: ComponentFixture<ToaThuocMauSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToaThuocMauSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToaThuocMauSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
