import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { PhanQuyenNguoiDungService } from './phan-quyen-nguoi-dung.service';
import { BaseService } from 'src/app/core/services/base.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { PhanQuyenNguoiDungRoutingModule } from './phan-quyen-nguoi-dung-routing.module';
import { PhanQuyenNguoiDungListComponent } from './phan-quyen-nguoi-dung-list/phan-quyen-nguoi-dung-list.component';
import { PhanQuyenNguoiDungCreateComponent } from './phan-quyen-nguoi-dung-create/phan-quyen-nguoi-dung-create.component';
import { PhanQuyenNguoiDungUpdateComponent } from './phan-quyen-nguoi-dung-update/phan-quyen-nguoi-dung-update.component';
import { PhanQuyenNguoiDungSharedComponent } from './phan-quyen-nguoi-dung-shared/phan-quyen-nguoi-dung-shared.component';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
    declarations: [
        PhanQuyenNguoiDungListComponent,
        PhanQuyenNguoiDungCreateComponent,
        PhanQuyenNguoiDungUpdateComponent,
        PhanQuyenNguoiDungSharedComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        TooltipModule,
        PageLayoutModule,
        BreadcrumbsModule,
        FlexLayoutModule,
        MatIconModule,
        MatSelectModule,
        IconModule,
        MatMenuModule,
        MatButtonToggleModule,
        MatTooltipModule,
        MatButtonModule,
        MatInputModule,
        InputsModule,
        MatRadioModule,
        PhanQuyenNguoiDungRoutingModule
    ],
    providers: [
        PhanQuyenNguoiDungService,
        { provide: BaseService, useClass: PhanQuyenNguoiDungService },
    ]
})

export class PhanQuyenNguoiDungModule { }
