import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoiDungMauEmailSmsNotifyListComponent } from './noi-dung-mau-email-sms-notify-list.component';

describe('NoiDungMauEmailSmsNotifyListComponent', () => {
  let component: NoiDungMauEmailSmsNotifyListComponent;
  let fixture: ComponentFixture<NoiDungMauEmailSmsNotifyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoiDungMauEmailSmsNotifyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoiDungMauEmailSmsNotifyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
