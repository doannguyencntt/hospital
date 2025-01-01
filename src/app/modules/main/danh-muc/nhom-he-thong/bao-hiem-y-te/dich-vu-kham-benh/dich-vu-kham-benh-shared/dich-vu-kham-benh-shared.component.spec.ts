import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DichVuKhamBenhSharedComponent } from './dich-vu-kham-benh-shared.component';

describe('DichVuKhamBenhSharedComponent', () => {
  let component: DichVuKhamBenhSharedComponent;
  let fixture: ComponentFixture<DichVuKhamBenhSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DichVuKhamBenhSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DichVuKhamBenhSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
