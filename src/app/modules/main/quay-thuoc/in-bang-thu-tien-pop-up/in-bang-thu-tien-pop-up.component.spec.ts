import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InBangThuTienPopUpComponent } from './in-bang-thu-tien-pop-up.component';

describe('InBangThuTienPopUpComponent', () => {
  let component: InBangThuTienPopUpComponent;
  let fixture: ComponentFixture<InBangThuTienPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InBangThuTienPopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InBangThuTienPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
