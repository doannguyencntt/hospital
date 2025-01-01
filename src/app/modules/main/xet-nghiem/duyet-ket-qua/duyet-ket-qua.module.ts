import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { DuyetKetQuaXetNghiemService } from './duyet-ket-qua.service';
import { BaseService } from 'src/app/core/services/base.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { DuyetKetQuaXetNghiemRoutingModule } from './duyet-ket-qua-routing.module';
import { DuyetKetQuaXetNghiemListComponent } from './duyet-ket-qua-list/duyet-ket-qua-list.component';
import { DuyetKetQuaXetNghiemPopupComponent } from './duyet-ket-qua-popup/duyet-ket-qua-popup.component';
import { DuyetKetQuaXetNghiemDetailedComponent } from './duyet-ket-qua-detailed/duyet-ket-qua-detailed.component';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatDialogModule, MatMenuModule } from '@angular/material';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material';
import { DuyetKetQuaPhieuPopupComponent } from './duyet-ket-qua-phieu-popup/duyet-ket-qua-phieu-popup.component';
import { DuyetKetQuaNhomDvListPopupComponent } from './duyet-ket-qua-nhom-dv-list-popup/duyet-ket-qua-nhom-dv-list-popup.component';
import { DuyetKetQuaInNhomDvListPopupComponent } from './duyet-ket-qua-in-nhom-dv-list-popup/duyet-ket-qua-in-nhom-dv-list-popup.component';
import { ChonLoaiKetQuaXetNghiemPopupComponent } from './chon-loai-ket-qua-xet-nghiem-popup/chon-loai-ket-qua-xet-nghiem-popup.component';


@NgModule({
    declarations: [
        DuyetKetQuaXetNghiemListComponent,
        DuyetKetQuaXetNghiemPopupComponent,
        DuyetKetQuaXetNghiemDetailedComponent,
        DuyetKetQuaPhieuPopupComponent,
        DuyetKetQuaNhomDvListPopupComponent,
        DuyetKetQuaInNhomDvListPopupComponent,
        //ChonLoaiKetQuaXetNghiemPopupComponent
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
        MatCheckboxModule,
        IconModule,
        MatMenuModule,
        ReactiveFormsModule,
        MatButtonToggleModule,
        MatDialogModule,
        MatTooltipModule,
        MatButtonModule,
        DuyetKetQuaXetNghiemRoutingModule
    ],
    providers: [
        DuyetKetQuaXetNghiemService,
        { provide: BaseService, useClass: DuyetKetQuaXetNghiemService },
    ],
    entryComponents: [
        DuyetKetQuaXetNghiemPopupComponent,
        DuyetKetQuaPhieuPopupComponent,
        DuyetKetQuaNhomDvListPopupComponent,
        DuyetKetQuaInNhomDvListPopupComponent,
        //ChonLoaiKetQuaXetNghiemPopupComponent
    ]
})

export class DuyetKetQuaXetNghiemModule { }
