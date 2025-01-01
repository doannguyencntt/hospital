import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LyDoTiepNhanUpdateComponent } from './ly-do-tiep-nhan-update.component';

describe('LyDoTiepNhanUpdateComponent', () => {
  let component: LyDoTiepNhanUpdateComponent;
  let fixture: ComponentFixture<LyDoTiepNhanUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LyDoTiepNhanUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LyDoTiepNhanUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
