import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheDoAnUpdateComponent } from './che-do-an-update.component';

describe('CheDoAnUpdateComponent', () => {
  let component: CheDoAnUpdateComponent;
  let fixture: ComponentFixture<CheDoAnUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheDoAnUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheDoAnUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
