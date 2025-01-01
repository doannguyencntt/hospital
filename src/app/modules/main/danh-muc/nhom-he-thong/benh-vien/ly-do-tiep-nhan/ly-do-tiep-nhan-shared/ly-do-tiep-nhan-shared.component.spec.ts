import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LyDoTiepNhanSharedComponent } from './ly-do-tiep-nhan-shared.component';

describe('LyDoTiepNhanSharedComponent', () => {
  let component: LyDoTiepNhanSharedComponent;
  let fixture: ComponentFixture<LyDoTiepNhanSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LyDoTiepNhanSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LyDoTiepNhanSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
