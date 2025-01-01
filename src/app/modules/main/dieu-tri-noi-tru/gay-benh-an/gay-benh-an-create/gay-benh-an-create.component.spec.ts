import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GayBenhAnCreateComponent } from './gay-benh-an-create.component';

describe('GayBenhAnCreateComponent', () => {
  let component: GayBenhAnCreateComponent;
  let fixture: ComponentFixture<GayBenhAnCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GayBenhAnCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GayBenhAnCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
