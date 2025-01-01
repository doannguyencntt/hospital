import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanTocUpdateComponent } from './dan-toc-update.component';

describe('DanTocUpdateComponent', () => {
  let component: DanTocUpdateComponent;
  let fixture: ComponentFixture<DanTocUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanTocUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanTocUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
