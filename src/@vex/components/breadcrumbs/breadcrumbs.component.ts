import { Component, Input, OnInit } from '@angular/core';
import icHome from '@iconify/icons-ic/twotone-home';
import { trackByValue } from '../../utils/track-by';

@Component({
  selector: 'vex-breadcrumbs',
  template: `
      <div class="flex items-center">
          <vex-breadcrumb>
              <a [routerLink]="['/trang-chu']">
                  <ic-icon [icon]="icHome" inline="true" size="20px"></ic-icon>
              </a>
          </vex-breadcrumb>
          <ng-container *ngFor="let crumb of crumbs; trackBy: trackByValue">
              <div class="w-1 h-1 bg-gray-300 rounded-full ltr:mr-2 rtl:ml-2"></div>
              <vex-breadcrumb [ngStyle]="{'opacity':crumb.Active?'1':'0.5'}">
                  <a [routerLink]="[crumb.Path]" [queryParams]="crumb.queryParams" *ngIf="crumb.Path!=null && crumb.Path!=''">{{ crumb.Title }}</a>
                  <a *ngIf="crumb.Path==null || crumb.Path==''" style='cursor: default;'>{{ crumb.Title }}</a>
              </vex-breadcrumb>
          </ng-container>
      </div>
  `
})
export class BreadcrumbsComponent implements OnInit {

  @Input() crumbs: any[] = [];

  trackByValue = trackByValue;
  icHome = icHome;

  constructor() {
  }

  ngOnInit() {
  }
}
