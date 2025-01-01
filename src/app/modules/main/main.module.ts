import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

import { ToasterModule } from 'angular2-toaster';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExpiredSectionModule } from './expired-section/expired-section.module';
import { ExpiredSectionComponent } from './expired-section/expired-section.component';
import { VexModule } from 'src/@vex/vex.module';


import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { SidenavModule } from 'src/@vex/layout/sidenav/sidenav.module';
import { ToolbarModule } from 'src/@vex/layout/toolbar/toolbar.module';
import { QuickpanelModule } from 'src/@vex/components/quickpanel/quickpanel.module';
import { ConfigPanelModule } from 'src/@vex/components/config-panel/config-panel.module';
import { SidebarModule } from 'src/@vex/components/sidebar/sidebar.module';
import { ProgressBarModule } from 'src/@vex/components/progress-bar/progress-bar.module';
import { FooterModule } from 'src/@vex/components/footer/footer.module';
import { SearchModule } from 'src/@vex/components/search/search.module';
import { LayoutComponent } from 'src/@vex/layout/layout.component';
import { IconModule } from '@visurel/iconify-angular';


@NgModule({
  imports: [
    ScrollToModule.forRoot(),
    ToasterModule,
    CommonModule,
    MainRoutingModule,
    ExpiredSectionModule,

    RouterModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    SidenavModule,
    ToolbarModule,
    QuickpanelModule,
    ConfigPanelModule,
    SidebarModule,
    ProgressBarModule,
    FooterModule,
    SearchModule,
    ToasterModule,
    IconModule,
    SharedModule
  ],
  declarations: [
    MainComponent,
    LayoutComponent,
  ],entryComponents: [ExpiredSectionComponent]
 
})
export class MainModule { }
