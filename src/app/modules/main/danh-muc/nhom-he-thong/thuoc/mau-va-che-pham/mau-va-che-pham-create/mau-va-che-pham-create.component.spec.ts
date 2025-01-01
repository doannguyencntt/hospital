import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MauVaChePhamCreateComponent } from './mau-va-che-pham-create.component';

describe('MauVaChePhamCreateComponent', () => {
  let component: MauVaChePhamCreateComponent;
  let fixture: ComponentFixture<MauVaChePhamCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MauVaChePhamCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MauVaChePhamCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
