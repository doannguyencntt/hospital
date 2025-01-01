import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionincorrectComponent } from './versionincorrect.component';

describe('VersionincorrectComponent', () => {
  let component: VersionincorrectComponent;
  let fixture: ComponentFixture<VersionincorrectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersionincorrectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionincorrectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
