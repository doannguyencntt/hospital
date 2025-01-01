import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LyDoTiepNhanCreateComponent } from './ly-do-tiep-nhan-create.component';

describe('LyDoTiepNhanCreateComponent', () => {
  let component: LyDoTiepNhanCreateComponent;
  let fixture: ComponentFixture<LyDoTiepNhanCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LyDoTiepNhanCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LyDoTiepNhanCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
