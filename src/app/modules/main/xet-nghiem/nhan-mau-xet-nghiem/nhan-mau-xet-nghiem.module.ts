import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseService } from 'src/app/core/services/base.service';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatCheckboxModule, MatInputModule,MatOptionModule, MatSelectModule, MatTabsModule,} from "@angular/material";
import { PageLayoutModule } from "src/@vex/components/page-layout/page-layout.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BreadcrumbsModule } from "src/@vex/components/breadcrumbs/breadcrumbs.module";
import { TooltipModule } from "@progress/kendo-angular-tooltip";
import { SharedModule } from "src/app/shared/shared.module";
import { MatIconModule, MatMenuModule, MatButtonToggleModule, MatTooltipModule, MatButtonModule, MatDialogModule } from "@angular/material";
import { IconModule } from "@visurel/iconify-angular";
import { MatRadioModule } from "@angular/material/radio";
import { LayoutModule } from "@progress/kendo-angular-layout";
import { GridModule } from "@progress/kendo-angular-grid";
import { NhanMauXetNghiemService } from './nhan-mau-xet-nghiem.service';
import { NhanMauXetNghiemRoutingModule } from './nhan-mau-xet-nghiem-routing.module';
import { NhanMauXetNghiemListComponent } from './nhan-mau-xet-nghiem-list/nhan-mau-xet-nghiem-list.component';
import { NhanMauXetNghiemChiTietComponent } from './nhan-mau-xet-nghiem-chi-tiet/nhan-mau-xet-nghiem-chi-tiet.component';
import { NhanMauXetNghiemTuChoiPopupComponent } from './nhan-mau-xet-nghiem-tu-choi-popup/nhan-mau-xet-nghiem-tu-choi-popup.component';

@NgModule({
    declarations: [NhanMauXetNghiemListComponent, NhanMauXetNghiemChiTietComponent, NhanMauXetNghiemTuChoiPopupComponent],
    imports: [
        CommonModule,
        NhanMauXetNghiemRoutingModule,
        ReactiveFormsModule,
        MatInputModule,
        MatOptionModule,
        MatSelectModule,
        MatTabsModule,
        PageLayoutModule,
        FlexLayoutModule,
        BreadcrumbsModule,
        FormsModule,
        TooltipModule,
        SharedModule,
        MatIconModule,
        IconModule,
        MatMenuModule,
        MatButtonToggleModule,
        MatTooltipModule,
        MatButtonModule,
        MatDialogModule,
        MatRadioModule,
        LayoutModule,
        GridModule,
        MatCheckboxModule
    ],
    providers: [
        NhanMauXetNghiemService,
        { provide: BaseService, useClass: NhanMauXetNghiemService },
    ],
    entryComponents: [
        NhanMauXetNghiemTuChoiPopupComponent
    ]
})

export class NhanMauXetNghiemModule { }