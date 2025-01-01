import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { CongTyUuDaiService } from './cong-ty-uu-dai.service';
import { BaseService } from 'src/app/core/services/base.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { CongTyUuDaiRoutingModule } from './cong-ty-uu-dai-routing.module';
import { CongTyUuDaiListComponent } from './cong-ty-uu-dai-list/cong-ty-uu-dai-list.component';
import { CongTyUuDaiCreateComponent } from './cong-ty-uu-dai-create/cong-ty-uu-dai-create.component';
import { CongTyUuDaiUpdateComponent } from './cong-ty-uu-dai-update/cong-ty-uu-dai-update.component';
import { CongTyUuDaiSharedComponent } from './cong-ty-uu-dai-shared/cong-ty-uu-dai-shared.component';
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
        CongTyUuDaiListComponent,
        CongTyUuDaiCreateComponent,
        CongTyUuDaiUpdateComponent,
        CongTyUuDaiSharedComponent
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
        CongTyUuDaiRoutingModule
    ],
    providers: [
        CongTyUuDaiService,
        { provide: BaseService, useClass: CongTyUuDaiService },
    ]
})

export class CongTyUuDaiModule { }
