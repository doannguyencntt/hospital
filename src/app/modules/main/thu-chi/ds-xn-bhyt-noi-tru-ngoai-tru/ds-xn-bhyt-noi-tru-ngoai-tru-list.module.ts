import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCheckboxModule, MatInputModule, MatOptionModule, MatSelectModule, MatTabsModule } from '@angular/material';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatIconModule, MatMenuModule, MatButtonToggleModule, MatTooltipModule, MatButtonModule, MatDialogModule } from '@angular/material';
import { IconModule } from '@visurel/iconify-angular';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { BaseService } from 'src/app/core/services/base.service';
import { MatRadioModule } from '@angular/material/radio';
import { DanhSachNoiTruVaNgoaiTruListComponent } from './ds-xn-bhyt-noi-tru-ngoai-tru-list/ds-xn-bhyt-noi-tru-ngoai-tru-list.component';
import { DanhSachNoiTruVaNgoaiTruRoutingModule } from './ds-xn-bhyt-noi-tru-ngoai-tru-list-routing.module';
import { XacNhanBHYTNoiTruVaNgoaiTruHoanThanhService } from './ds-xn-bhyt-noi-tru-ngoai-tru-list.service';

@NgModule({
    declarations: [
        DanhSachNoiTruVaNgoaiTruListComponent
    ],
    imports: [
        ReactiveFormsModule,
        MatInputModule, MatOptionModule, MatSelectModule,
        MatTabsModule,
        DanhSachNoiTruVaNgoaiTruRoutingModule,
        CommonModule,
        PageLayoutModule,
        FlexLayoutModule,
        BreadcrumbsModule,
        FormsModule,
        TooltipModule,
        SharedModule,
        MatIconModule,
        MatMenuModule,
        IconModule,
        MatMenuModule,
        MatButtonToggleModule,
        MatTooltipModule,
        MatButtonModule,
        MatCheckboxModule,
        MatDialogModule,
        MatRadioModule,
        LayoutModule
    ],
    providers: [
        XacNhanBHYTNoiTruVaNgoaiTruHoanThanhService,
        { provide: BaseService, useClass: XacNhanBHYTNoiTruVaNgoaiTruHoanThanhService },
    ],
    entryComponents: [
        
    ]
})
export class XacNhanBHYTNoiTruVaNgoaiTruHoanThanhServiceModule { }
