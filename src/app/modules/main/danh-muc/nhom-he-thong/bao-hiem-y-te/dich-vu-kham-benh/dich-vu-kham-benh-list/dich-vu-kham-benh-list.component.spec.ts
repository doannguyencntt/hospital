import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DichVuKhamBenhListComponent } from './dich-vu-kham-benh-list.component';

describe('DichVuKhamBenhListComponent', () => {
  let component: DichVuKhamBenhListComponent;
  let fixture: ComponentFixture<DichVuKhamBenhListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DichVuKhamBenhListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DichVuKhamBenhListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
