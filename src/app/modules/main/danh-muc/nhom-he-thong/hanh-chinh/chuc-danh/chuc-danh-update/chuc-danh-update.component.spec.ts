import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChucDanhUpdateComponent } from './chuc-danh-update.component';

describe('ChucDanhUpdateComponent', () => {
  let component: ChucDanhUpdateComponent;
  let fixture: ComponentFixture<ChucDanhUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChucDanhUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChucDanhUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
