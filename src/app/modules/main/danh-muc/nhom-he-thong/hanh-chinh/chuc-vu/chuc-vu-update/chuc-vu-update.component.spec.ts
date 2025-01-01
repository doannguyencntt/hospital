import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChucVuUpdateComponent } from './chuc-vu-update.component';

describe('ChucVuUpdateComponent', () => {
  let component: ChucVuUpdateComponent;
  let fixture: ComponentFixture<ChucVuUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChucVuUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChucVuUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
