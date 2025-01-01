import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhamDoanGiamDocDuyetListComponent } from './kham-doan-giam-doc-duyet-list.component';

describe('KhamDoanGiamDocDuyetListComponent', () => {
  let component: KhamDoanGiamDocDuyetListComponent;
  let fixture: ComponentFixture<KhamDoanGiamDocDuyetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhamDoanGiamDocDuyetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhamDoanGiamDocDuyetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
