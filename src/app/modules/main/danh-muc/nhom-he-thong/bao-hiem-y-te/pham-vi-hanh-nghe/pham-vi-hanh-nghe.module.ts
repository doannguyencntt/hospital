import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { PhamViHanhNgheService } from './pham-vi-hanh-nghe.service';
import { BaseService } from 'src/app/core/services/base.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { PhamViHanhNgheRoutingModule } from './pham-vi-hanh-nghe-routing.module';
import { PhamViHanhNgheListComponent } from './pham-vi-hanh-nghe-list/pham-vi-hanh-nghe-list.component';
import { PhamViHanhNgheCreateComponent } from './pham-vi-hanh-nghe-create/pham-vi-hanh-nghe-create.component';
import { PhamViHanhNgheUpdateComponent } from './pham-vi-hanh-nghe-update/pham-vi-hanh-nghe-update.component';
import { PhamViHanhNgheSharedComponent } from './pham-vi-hanh-nghe-shared/pham-vi-hanh-nghe-shared.component';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';

@NgModule({
    declarations: [
        PhamViHanhNgheListComponent,
        PhamViHanhNgheCreateComponent,
        PhamViHanhNgheUpdateComponent,
        PhamViHanhNgheSharedComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        TooltipModule,
        PageLayoutModule,
        BreadcrumbsModule,
        FlexLayoutModule,
        PhamViHanhNgheRoutingModule
    ],
    providers: [
        PhamViHanhNgheService,
        { provide: BaseService, useClass: PhamViHanhNgheService },
    ]
})

export class PhamViHanhNgheModule { }
