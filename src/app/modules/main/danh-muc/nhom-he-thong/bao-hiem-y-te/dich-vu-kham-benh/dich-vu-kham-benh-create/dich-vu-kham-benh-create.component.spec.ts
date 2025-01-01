import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DichVuKhamBenhCreateComponent } from './dich-vu-kham-benh-create.component';

describe('DichVuKhamBenhCreateComponent', () => {
  let component: DichVuKhamBenhCreateComponent;
  let fixture: ComponentFixture<DichVuKhamBenhCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DichVuKhamBenhCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DichVuKhamBenhCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
