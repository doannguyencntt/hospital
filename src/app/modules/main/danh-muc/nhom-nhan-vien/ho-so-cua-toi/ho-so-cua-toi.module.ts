import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThongTinHoSoCuaToiComponent } from './thong-tin-ho-so-cua-toi/thong-tin-ho-so-cua-toi.component';
import { HoSoCuaToiRoutingModule } from './ho-so-cua-toi-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { MatButtonModule } from '@angular/material';
import { IconModule } from '@visurel/iconify-angular';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ThongTinHoSoCuaToiComponent],
  imports: [
    HoSoCuaToiRoutingModule,
    CommonModule,
    FormsModule,
    SharedModule,
    TooltipModule,
    PageLayoutModule,
    IconModule,
    BreadcrumbsModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class HoSoCuaToiModule { }
