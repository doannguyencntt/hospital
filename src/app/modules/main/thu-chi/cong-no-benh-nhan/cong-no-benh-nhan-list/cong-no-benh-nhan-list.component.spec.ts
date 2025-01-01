import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongNoBenhNhanListComponent } from './cong-no-benh-nhan-list.component';

describe('CongNoBenhNhanListComponent', () => {
  let component: CongNoBenhNhanListComponent;
  let fixture: ComponentFixture<CongNoBenhNhanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongNoBenhNhanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongNoBenhNhanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
