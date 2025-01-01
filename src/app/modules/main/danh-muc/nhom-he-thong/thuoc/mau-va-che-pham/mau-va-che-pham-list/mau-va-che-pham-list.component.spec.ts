import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MauVaChePhamListComponent } from './mau-va-che-pham-list.component';

describe('MauVaChePhamListComponent', () => {
  let component: MauVaChePhamListComponent;
  let fixture: ComponentFixture<MauVaChePhamListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MauVaChePhamListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MauVaChePhamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
