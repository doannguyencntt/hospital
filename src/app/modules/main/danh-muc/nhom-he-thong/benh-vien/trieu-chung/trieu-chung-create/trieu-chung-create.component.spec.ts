import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrieuChungCreateComponent } from './trieu-chung-create.component';

describe('TrieuChungCreateComponent', () => {
  let component: TrieuChungCreateComponent;
  let fixture: ComponentFixture<TrieuChungCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrieuChungCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrieuChungCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
