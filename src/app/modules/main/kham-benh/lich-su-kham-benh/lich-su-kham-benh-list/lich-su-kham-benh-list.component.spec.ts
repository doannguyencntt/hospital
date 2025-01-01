import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuKhamBenhListComponent } from './lich-su-kham-benh-list.component';

describe('LichSuKhamBenhListComponent', () => {
  let component: LichSuKhamBenhListComponent;
  let fixture: ComponentFixture<LichSuKhamBenhListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichSuKhamBenhListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuKhamBenhListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
