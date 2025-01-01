import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoiGioiThieuCreateComponent } from './noi-gioi-thieu-create.component';

describe('NoiGioiThieuCreateComponent', () => {
  let component: NoiGioiThieuCreateComponent;
  let fixture: ComponentFixture<NoiGioiThieuCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoiGioiThieuCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoiGioiThieuCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
