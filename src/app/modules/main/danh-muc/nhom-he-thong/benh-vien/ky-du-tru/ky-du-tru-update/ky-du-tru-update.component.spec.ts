import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KyDuTruUpdateComponent } from './ky-du-tru-update.component';

describe('KyDuTruUpdateComponent', () => {
  let component: KyDuTruUpdateComponent;
  let fixture: ComponentFixture<KyDuTruUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KyDuTruUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KyDuTruUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
