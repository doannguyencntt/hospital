import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhamDoanTatCaPhongDetailComponent } from './kham-doan-tat-ca-phong-detail.component';

describe('KhamDoanTatCaPhongDetailComponent', () => {
  let component: KhamDoanTatCaPhongDetailComponent;
  let fixture: ComponentFixture<KhamDoanTatCaPhongDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhamDoanTatCaPhongDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhamDoanTatCaPhongDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
