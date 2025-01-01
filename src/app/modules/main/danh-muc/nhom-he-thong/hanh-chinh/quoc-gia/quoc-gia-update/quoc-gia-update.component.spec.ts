import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuocGiaUpdateComponent } from './quoc-gia-update.component';

describe('QuocGiaUpdateComponent', () => {
  let component: QuocGiaUpdateComponent;
  let fixture: ComponentFixture<QuocGiaUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuocGiaUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuocGiaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
