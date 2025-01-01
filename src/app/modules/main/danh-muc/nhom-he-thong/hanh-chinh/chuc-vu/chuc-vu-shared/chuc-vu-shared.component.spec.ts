import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChucVuSharedComponent } from './chuc-vu-shared.component';

describe('ChucVuSharedComponent', () => {
  let component: ChucVuSharedComponent;
  let fixture: ComponentFixture<ChucVuSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChucVuSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChucVuSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
