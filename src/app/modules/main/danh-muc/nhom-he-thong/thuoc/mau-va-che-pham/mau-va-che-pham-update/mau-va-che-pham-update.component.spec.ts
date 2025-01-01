import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MauVaChePhamUpdateComponent } from './mau-va-che-pham-update.component';

describe('MauVaChePhamUpdateComponent', () => {
  let component: MauVaChePhamUpdateComponent;
  let fixture: ComponentFixture<MauVaChePhamUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MauVaChePhamUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MauVaChePhamUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
