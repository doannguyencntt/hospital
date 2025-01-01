import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GayBenhAnSharedComponent } from './gay-benh-an-shared.component';

describe('GayBenhAnSharedComponent', () => {
  let component: GayBenhAnSharedComponent;
  let fixture: ComponentFixture<GayBenhAnSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GayBenhAnSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GayBenhAnSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
