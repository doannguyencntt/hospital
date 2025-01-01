import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhamBenhLichSuKhamListComponent } from './kham-benh-lich-su-kham-list.component';

describe('KhamBenhLichSuKhamListComponent', () => {
  let component: KhamBenhLichSuKhamListComponent;
  let fixture: ComponentFixture<KhamBenhLichSuKhamListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhamBenhLichSuKhamListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhamBenhLichSuKhamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
