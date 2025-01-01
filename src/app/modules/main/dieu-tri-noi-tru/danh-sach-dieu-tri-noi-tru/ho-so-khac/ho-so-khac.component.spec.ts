import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoSoKhacComponent } from './ho-so-khac.component';

describe('HoSoKhacComponent', () => {
  let component: HoSoKhacComponent;
  let fixture: ComponentFixture<HoSoKhacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoSoKhacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoSoKhacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
