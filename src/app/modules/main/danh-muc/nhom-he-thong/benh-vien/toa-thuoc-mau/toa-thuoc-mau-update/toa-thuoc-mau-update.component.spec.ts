import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToaThuocMauUpdateComponent } from './toa-thuoc-mau-update.component';

describe('ToaThuocMauUpdateComponent', () => {
  let component: ToaThuocMauUpdateComponent;
  let fixture: ComponentFixture<ToaThuocMauUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToaThuocMauUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToaThuocMauUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
