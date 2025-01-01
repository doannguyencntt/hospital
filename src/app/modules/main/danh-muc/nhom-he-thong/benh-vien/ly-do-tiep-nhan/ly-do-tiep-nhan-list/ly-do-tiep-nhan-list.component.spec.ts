import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LyDoTiepNhanListComponent } from './ly-do-tiep-nhan-list.component';

describe('LyDoTiepNhanListComponent', () => {
  let component: LyDoTiepNhanListComponent;
  let fixture: ComponentFixture<LyDoTiepNhanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LyDoTiepNhanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LyDoTiepNhanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
