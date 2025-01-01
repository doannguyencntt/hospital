import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrieuChungUpdateComponent } from './trieu-chung-update.component';

describe('TrieuChungUpdateComponent', () => {
  let component: TrieuChungUpdateComponent;
  let fixture: ComponentFixture<TrieuChungUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrieuChungUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrieuChungUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
