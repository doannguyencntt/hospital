import { Component, OnInit, ViewChild } from '@angular/core';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { NoiDungMauEmailSmsNotifyShareComponent } from '../noi-dung-mau-email-sms-notify-share/noi-dung-mau-email-sms-notify-share.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noi-dung-mau-email-sms-notify-update',
  templateUrl: './noi-dung-mau-email-sms-notify-update.component.html',
  styleUrls: ['./noi-dung-mau-email-sms-notify-update.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class NoiDungMauEmailSmsNotifyUpdateComponent implements OnInit {

  @ViewChild(NoiDungMauEmailSmsNotifyShareComponent, { static: true }) shared;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  onUpdated() {
    this.router.navigate(['/danh-muc/nhom-he-thong/noi-dung-mau/noi-dung-mau-email-sms-thong-bao']);
  }

}
