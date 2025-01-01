import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChucDanhCreateComponent } from './chuc-danh-create.component';

describe('ChucDanhCreateComponent', () => {
  let component: ChucDanhCreateComponent;
  let fixture: ComponentFixture<ChucDanhCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChucDanhCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChucDanhCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
