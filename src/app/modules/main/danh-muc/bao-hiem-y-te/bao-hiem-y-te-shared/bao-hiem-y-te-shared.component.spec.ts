import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoHiemYTeSharedComponent } from './bao-hiem-y-te-shared.component';

describe('BaoHiemYTeSharedComponent', () => {
  let component: BaoHiemYTeSharedComponent;
  let fixture: ComponentFixture<BaoHiemYTeSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaoHiemYTeSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoHiemYTeSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
