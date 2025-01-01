import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChucVuListComponent } from './chuc-vu-list.component';

describe('ChucVuListComponent', () => {
  let component: ChucVuListComponent;
  let fixture: ComponentFixture<ChucVuListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChucVuListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChucVuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
