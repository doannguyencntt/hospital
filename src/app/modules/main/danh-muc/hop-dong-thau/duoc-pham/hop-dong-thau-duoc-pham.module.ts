import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { HopDongThauDuocPhamService } from './hop-dong-thau-duoc-pham.service';
import { BaseService } from 'src/app/core/services/base.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { HopDongThauDuocPhamRoutingModule } from './hop-dong-thau-duoc-pham-routing.module';
import { HopDongThauDuocPhamListComponent } from './hop-dong-thau-duoc-pham-list/hop-dong-thau-duoc-pham-list.component';
import { HopDongThauDuocPhamCreateComponent } from './hop-dong-thau-duoc-pham-create/hop-dong-thau-duoc-pham-create.component';
import { HopDongThauDuocPhamUpdateComponent } from './hop-dong-thau-duoc-pham-update/hop-dong-thau-duoc-pham-update.component';
import { HopDongThauDuocPhamSharedComponent } from './hop-dong-thau-duoc-pham-shared/hop-dong-thau-duoc-pham-shared.component';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [
        HopDongThauDuocPhamListComponent,
        HopDongThauDuocPhamCreateComponent,
        HopDongThauDuocPhamUpdateComponent,
        HopDongThauDuocPhamSharedComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        TooltipModule,
        PageLayoutModule,
        BreadcrumbsModule,
        FlexLayoutModule,
        MatIconModule,
        IconModule,
        MatMenuModule,
        MatButtonToggleModule,
        MatTooltipModule,
        MatButtonModule,
        HopDongThauDuocPhamRoutingModule
    ],
    providers: [
        HopDongThauDuocPhamService,
        { provide: BaseService, useClass: HopDongThauDuocPhamService },
    ]
})

export class HopDongThauDuocPhamModule { }
