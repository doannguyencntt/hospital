import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrieuChungListComponent } from './trieu-chung-list.component';

describe('TrieuChungListComponent', () => {
  let component: TrieuChungListComponent;
  let fixture: ComponentFixture<TrieuChungListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrieuChungListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrieuChungListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
