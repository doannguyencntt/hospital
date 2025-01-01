import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DsBaoHiemYTeComponent } from './ds-bao-hiem-y-te.component';

describe('DsBaoHiemYTeComponent', () => {
  let component: DsBaoHiemYTeComponent;
  let fixture: ComponentFixture<DsBaoHiemYTeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DsBaoHiemYTeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsBaoHiemYTeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
