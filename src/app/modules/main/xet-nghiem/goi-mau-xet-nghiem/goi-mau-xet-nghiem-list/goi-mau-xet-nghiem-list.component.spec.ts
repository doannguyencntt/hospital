import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoiMauXetNghiemListComponent } from './goi-mau-xet-nghiem-list.component';

describe('GoiMauXetNghiemListComponent', () => {
  let component: GoiMauXetNghiemListComponent;
  let fixture: ComponentFixture<GoiMauXetNghiemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoiMauXetNghiemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoiMauXetNghiemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
