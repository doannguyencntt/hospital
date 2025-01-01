import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrieuChungSharedComponent } from './trieu-chung-shared.component';

describe('TrieuChungSharedComponent', () => {
  let component: TrieuChungSharedComponent;
  let fixture: ComponentFixture<TrieuChungSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrieuChungSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrieuChungSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
