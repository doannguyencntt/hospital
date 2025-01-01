import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoHiemYTeXemComponent } from './bao-hiem-y-te-xem.component';

describe('BaoHiemYTeXemComponent', () => {
  let component: BaoHiemYTeXemComponent;
  let fixture: ComponentFixture<BaoHiemYTeXemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaoHiemYTeXemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoHiemYTeXemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
