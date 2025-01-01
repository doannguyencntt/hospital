import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToaThuocMauCreateComponent } from './toa-thuoc-mau-create.component';

describe('ToaThuocMauCreateComponent', () => {
  let component: ToaThuocMauCreateComponent;
  let fixture: ComponentFixture<ToaThuocMauCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToaThuocMauCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToaThuocMauCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
