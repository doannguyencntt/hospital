import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenhNhanUpdateComponent } from './benh-nhan-update.component';

describe('BenhNhanUpdateComponent', () => {
  let component: BenhNhanUpdateComponent;
  let fixture: ComponentFixture<BenhNhanUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenhNhanUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenhNhanUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
