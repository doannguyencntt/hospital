import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';

import { BaseService } from 'src/app/core/services/base.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatMenuModule } from '@angular/material/menu';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { GridModule } from '@progress/kendo-angular-grid';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { NhomBenhVaTenBenhListComponent } from './nhom-benh-va-ten-benh-list/nhom-benh-va-ten-benh-list.component';
import { NhomBenhVaTenBenhCreateComponent } from './nhom-benh-va-ten-benh-create/nhom-benh-va-ten-benh-create.component';
import { NhomBenhVaTenBenhUpdateComponent } from './nhom-benh-va-ten-benh-update/nhom-benh-va-ten-benh-update.component';
import { NhomBenhVaTenBenhSharedComponent } from './nhom-benh-va-ten-benh-shared/nhom-benh-va-ten-benh-shared.component';
import { NhomBenhVaTenBenhRoutingModule } from './nhom-benh-va-ten-benh-routing.module';
import { NhomBenhVaTenBenhService } from './nhom-benh-va-ten-benh.service';

@NgModule({
    declarations: [
        NhomBenhVaTenBenhListComponent,
        NhomBenhVaTenBenhCreateComponent,
        NhomBenhVaTenBenhUpdateComponent,
        NhomBenhVaTenBenhSharedComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        MatIconModule,
        IconModule,
        TooltipModule,
        MatMenuModule,
        PageLayoutModule,
        BreadcrumbsModule,
        FlexLayoutModule,
        MatButtonToggleModule,
        MatTooltipModule,
        MatButtonModule,
        GridModule,
        NhomBenhVaTenBenhRoutingModule,
        ReactiveFormsModule,
        TreeViewModule,
    ],
    providers: [
        NhomBenhVaTenBenhService,
        { provide: BaseService, useClass: NhomBenhVaTenBenhService },
    ]
})
export class NhomBenhVaTenBenhModule { }
