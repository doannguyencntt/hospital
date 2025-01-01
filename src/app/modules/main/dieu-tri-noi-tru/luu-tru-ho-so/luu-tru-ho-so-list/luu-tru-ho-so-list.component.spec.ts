import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuuTruHoSoListComponent } from './luu-tru-ho-so-list.component';

describe('LuuTruHoSoListComponent', () => {
  let component: LuuTruHoSoListComponent;
  let fixture: ComponentFixture<LuuTruHoSoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuuTruHoSoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuuTruHoSoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
