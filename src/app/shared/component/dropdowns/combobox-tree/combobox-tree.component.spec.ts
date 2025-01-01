import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboboxTreeComponent } from './combobox-tree.component';

describe('ComboboxTreeComponent', () => {
  let component: ComboboxTreeComponent;
  let fixture: ComponentFixture<ComboboxTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboboxTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboboxTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
