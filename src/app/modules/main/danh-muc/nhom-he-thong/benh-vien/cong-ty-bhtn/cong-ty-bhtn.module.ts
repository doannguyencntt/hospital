import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { CongTyBhtnService } from './cong-ty-bhtn.service';
import { BaseService } from 'src/app/core/services/base.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { CongTyBhtnRoutingModule } from './cong-ty-bhtn-routing.module';
import { CongTyBhtnListComponent } from './cong-ty-bhtn-list/cong-ty-bhtn-list.component';
import { CongTyBhtnCreateComponent } from './cong-ty-bhtn-create/cong-ty-bhtn-create.component';
import { CongTyBhtnUpdateComponent } from './cong-ty-bhtn-update/cong-ty-bhtn-update.component';
import { CongTyBhtnSharedComponent } from './cong-ty-bhtn-shared/cong-ty-bhtn-shared.component';
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
        CongTyBhtnListComponent,
        CongTyBhtnCreateComponent,
        CongTyBhtnUpdateComponent,
        CongTyBhtnSharedComponent
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
        CongTyBhtnRoutingModule
    ],
    providers: [
        CongTyBhtnService,
        { provide: BaseService, useClass: CongTyBhtnService },
    ]
})

export class CongTyBhtnModule { }
