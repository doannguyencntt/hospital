import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhamDoanCongTyListComponent } from './kham-doan-cong-ty-list.component';

describe('KhamDoanCongTyListComponent', () => {
  let component: KhamDoanCongTyListComponent;
  let fixture: ComponentFixture<KhamDoanCongTyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhamDoanCongTyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhamDoanCongTyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
