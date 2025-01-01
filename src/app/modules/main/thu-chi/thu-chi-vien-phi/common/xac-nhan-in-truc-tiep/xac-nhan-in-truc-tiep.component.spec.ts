import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XacNhanInTrucTiepComponent } from './xac-nhan-in-truc-tiep.component';

describe('XacNhanInTrucTiepComponent', () => {
  let component: XacNhanInTrucTiepComponent;
  let fixture: ComponentFixture<XacNhanInTrucTiepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XacNhanInTrucTiepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XacNhanInTrucTiepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
