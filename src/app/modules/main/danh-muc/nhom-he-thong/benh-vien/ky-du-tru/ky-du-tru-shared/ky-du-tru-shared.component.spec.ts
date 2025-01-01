import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KyDuTruSharedComponent } from './ky-du-tru-shared.component';

describe('KyDuTruSharedComponent', () => {
  let component: KyDuTruSharedComponent;
  let fixture: ComponentFixture<KyDuTruSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KyDuTruSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KyDuTruSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
