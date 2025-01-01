import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoiDungMauEmailSmsNotifyUpdateComponent } from './noi-dung-mau-email-sms-notify-update.component';

describe('NoiDungMauEmailSmsNotifyUpdateComponent', () => {
  let component: NoiDungMauEmailSmsNotifyUpdateComponent;
  let fixture: ComponentFixture<NoiDungMauEmailSmsNotifyUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoiDungMauEmailSmsNotifyUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoiDungMauEmailSmsNotifyUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
