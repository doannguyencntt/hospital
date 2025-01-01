import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DichVuKhamBenhUpdateComponent } from './dich-vu-kham-benh-update.component';

describe('DichVuKhamBenhUpdateComponent', () => {
  let component: DichVuKhamBenhUpdateComponent;
  let fixture: ComponentFixture<DichVuKhamBenhUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DichVuKhamBenhUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DichVuKhamBenhUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
