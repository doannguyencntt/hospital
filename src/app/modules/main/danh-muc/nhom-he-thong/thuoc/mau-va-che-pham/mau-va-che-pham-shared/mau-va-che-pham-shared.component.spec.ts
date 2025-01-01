import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MauVaChePhamSharedComponent } from './mau-va-che-pham-shared.component';

describe('MauVaChePhamSharedComponent', () => {
  let component: MauVaChePhamSharedComponent;
  let fixture: ComponentFixture<MauVaChePhamSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MauVaChePhamSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MauVaChePhamSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
