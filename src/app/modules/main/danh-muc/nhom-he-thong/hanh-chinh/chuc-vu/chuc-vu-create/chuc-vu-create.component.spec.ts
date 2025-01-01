import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChucVuCreateComponent } from './chuc-vu-create.component';

describe('ChucVuCreateComponent', () => {
  let component: ChucVuCreateComponent;
  let fixture: ComponentFixture<ChucVuCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChucVuCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChucVuCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
