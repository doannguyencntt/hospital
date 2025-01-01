import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DsChuaThuTienComponent } from './ds-chua-thu-tien.component';

describe('DsChuaThuTienComponent', () => {
  let component: DsChuaThuTienComponent;
  let fixture: ComponentFixture<DsChuaThuTienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DsChuaThuTienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsChuaThuTienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
