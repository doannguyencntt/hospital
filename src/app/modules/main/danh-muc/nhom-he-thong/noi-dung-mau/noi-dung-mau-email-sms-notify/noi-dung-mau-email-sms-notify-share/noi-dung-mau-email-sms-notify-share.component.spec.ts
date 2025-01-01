import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoiDungMauEmailSmsNotifyShareComponent } from './noi-dung-mau-email-sms-notify-share.component';

describe('NoiDungMauEmailSmsNotifyShareComponent', () => {
  let component: NoiDungMauEmailSmsNotifyShareComponent;
  let fixture: ComponentFixture<NoiDungMauEmailSmsNotifyShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoiDungMauEmailSmsNotifyShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoiDungMauEmailSmsNotifyShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
