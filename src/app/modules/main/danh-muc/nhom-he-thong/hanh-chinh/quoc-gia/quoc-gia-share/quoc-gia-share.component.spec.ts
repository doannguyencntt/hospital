import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuocGiaShareComponent } from './quoc-gia-share.component';

describe('QuocGiaShareComponent', () => {
  let component: QuocGiaShareComponent;
  let fixture: ComponentFixture<QuocGiaShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuocGiaShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuocGiaShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
