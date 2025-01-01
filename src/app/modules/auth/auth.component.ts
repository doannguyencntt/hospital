import { Component, OnInit } from '@angular/core';
import { ToasterConfig } from 'angular2-toaster';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  toastConfigSetup: any;
  constructor() {
    this.toastConfigSetup = new ToasterConfig({
      timeout: 7000,
      mouseoverTimerStop: false,
      showCloseButton: true,
      positionClass: "toast-bottom-right"
    });

  }

  ngOnInit() {
  }

}
