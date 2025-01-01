import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhamBenhDangKhamListComponent } from './kham-benh-dang-kham-list.component';

describe('KhamBenhDangKhamListComponent', () => {
  let component: KhamBenhDangKhamListComponent;
  let fixture: ComponentFixture<KhamBenhDangKhamListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhamBenhDangKhamListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhamBenhDangKhamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
