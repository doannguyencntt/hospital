import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToaThuocMauListComponent } from './toa-thuoc-mau-list.component';

describe('ToaThuocMauListComponent', () => {
  let component: ToaThuocMauListComponent;
  let fixture: ComponentFixture<ToaThuocMauListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToaThuocMauListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToaThuocMauListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
