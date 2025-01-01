import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KyDuTruListComponent } from './ky-du-tru-list.component';

describe('KyDuTruListComponent', () => {
  let component: KyDuTruListComponent;
  let fixture: ComponentFixture<KyDuTruListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KyDuTruListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KyDuTruListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
