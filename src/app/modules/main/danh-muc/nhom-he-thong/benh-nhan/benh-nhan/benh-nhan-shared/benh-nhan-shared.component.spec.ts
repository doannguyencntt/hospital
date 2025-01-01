import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenhNhanSharedComponent } from './benh-nhan-shared.component';

describe('BenhNhanSharedComponent', () => {
  let component: BenhNhanSharedComponent;
  let fixture: ComponentFixture<BenhNhanSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenhNhanSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenhNhanSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
