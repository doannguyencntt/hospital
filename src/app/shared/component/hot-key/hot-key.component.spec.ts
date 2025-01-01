import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotKeyComponent } from './hot-key.component';

describe('HotKeyComponent', () => {
  let component: HotKeyComponent;
  let fixture: ComponentFixture<HotKeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotKeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
