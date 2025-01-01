import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoiGioiThieuSharedComponent } from './noi-gioi-thieu-shared.component';

describe('NoiGioiThieuSharedComponent', () => {
  let component: NoiGioiThieuSharedComponent;
  let fixture: ComponentFixture<NoiGioiThieuSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoiGioiThieuSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoiGioiThieuSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
