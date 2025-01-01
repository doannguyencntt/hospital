import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheDoAnSharedComponent } from './che-do-an-shared.component';

describe('CheDoAnSharedComponent', () => {
  let component: CheDoAnSharedComponent;
  let fixture: ComponentFixture<CheDoAnSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheDoAnSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheDoAnSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
