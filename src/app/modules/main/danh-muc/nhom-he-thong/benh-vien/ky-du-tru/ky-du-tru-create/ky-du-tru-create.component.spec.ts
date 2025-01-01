import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KyDuTruCreateComponent } from './ky-du-tru-create.component';

describe('KyDuTruCreateComponent', () => {
  let component: KyDuTruCreateComponent;
  let fixture: ComponentFixture<KyDuTruCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KyDuTruCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KyDuTruCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
