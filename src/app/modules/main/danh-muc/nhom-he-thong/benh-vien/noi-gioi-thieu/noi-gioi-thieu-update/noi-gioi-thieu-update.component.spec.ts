import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoiGioiThieuUpdateComponent } from './noi-gioi-thieu-update.component';

describe('NoiGioiThieuUpdateComponent', () => {
  let component: NoiGioiThieuUpdateComponent;
  let fixture: ComponentFixture<NoiGioiThieuUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoiGioiThieuUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoiGioiThieuUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
