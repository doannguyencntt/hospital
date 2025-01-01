import { ChangeDetectorRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { ErrorService } from 'src/app/core/error/error.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { BaseService } from 'src/app/core/services/base.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { MarketingSharedComponent } from '../marketing-shared/marketing-shared.component';

@Component({
  selector: 'app-marketing-update',
  templateUrl: './marketing-update.component.html',
  styleUrls: ['./marketing-update.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class MarketingUpdateComponent implements OnInit {

  @ViewChild(MarketingSharedComponent, { static: true }) shared;

  constructor(private route: ActivatedRoute, private router: Router, private baseService: BaseService, private ref: ChangeDetectorRef, private notificationService: NotificationService, private authService: AuthService,
    private errorService: ErrorService, private dialog: MatDialog) { }

  ngOnInit() {
  }

  onUpdated(){
    //this.router.navigate(['danh-muc/danh-sach-marketing/']);
    this.router.navigateByUrl('marketing/dang-ky-goi-marketing?holdQuery=true');
  }

  cancel(){
    this.onUpdated();
  }
}
