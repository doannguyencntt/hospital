import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoiMauXetNghiemListComponent } from './goi-mau-xet-nghiem-list/goi-mau-xet-nghiem-list.component';
import { GoiMauXetNghiemService } from './goi-mau-xet-nghiem.service';
import { GoiMauXetNghiemRoutingModule } from './goi-mau-xet-nghiem-routing.module';
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
import { GoiMauXetNghiemChiTietComponent } from './goi-mau-xet-nghiem-chi-tiet/goi-mau-xet-nghiem-chi-tiet.component';

@NgModule({
    declarations: [GoiMauXetNghiemListComponent, GoiMauXetNghiemChiTietComponent],
    imports: [
        CommonModule,
        GoiMauXetNghiemRoutingModule,
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
        GoiMauXetNghiemService,
        { provide: BaseService, useClass: GoiMauXetNghiemService },
    ],
    entryComponents: [
    ]
})

export class GoiMauXetNghiemModule { }