import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoiGioiThieuListComponent } from './noi-gioi-thieu-list.component';

describe('NoiGioiThieuListComponent', () => {
  let component: NoiGioiThieuListComponent;
  let fixture: ComponentFixture<NoiGioiThieuListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoiGioiThieuListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoiGioiThieuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
