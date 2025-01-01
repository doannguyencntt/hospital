import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChucDanhSharedComponent } from './chuc-danh-shared.component';

describe('ChucDanhSharedComponent', () => {
  let component: ChucDanhSharedComponent;
  let fixture: ComponentFixture<ChucDanhSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChucDanhSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChucDanhSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
