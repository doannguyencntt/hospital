import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GayBenhAnUpdateComponent } from './gay-benh-an-update.component';

describe('GayBenhAnUpdateComponent', () => {
  let component: GayBenhAnUpdateComponent;
  let fixture: ComponentFixture<GayBenhAnUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GayBenhAnUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GayBenhAnUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
