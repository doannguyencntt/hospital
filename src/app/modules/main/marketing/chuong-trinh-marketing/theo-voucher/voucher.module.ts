import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseService } from 'src/app/core/services/base.service';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { MatDialogModule, MatTabsModule, MatIconModule, MatMenuModule, MatButtonToggleModule, MatTooltipModule, MatButtonModule, MatInputModule, MatCheckboxModule, MatSelectModule, MatRadioModule, MatOptionModule} from '@angular/material';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IconModule } from '@visurel/iconify-angular';
import { GridModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { VoucherRoutingModule } from './voucher-routing.module';
import { VoucherService } from './voucher.service';
import { VoucherListComponent } from './voucher-list/voucher-list.component';
import { VoucherCreateComponent } from './voucher-create/voucher-create.component';
import { VoucherSharedComponent } from './voucher-shared/voucher-shared.component';
import { VoucherUpdateComponent } from './voucher-update/voucher-update.component';
import { VoucherInPopupComponent } from './voucher-in-popup/voucher-in-popup.component';
import { VoucherChiTietPopupComponent } from './voucher-chi-tiet-popup/voucher-chi-tiet-popup.component';

@NgModule({
    declarations: [ VoucherListComponent, VoucherCreateComponent, VoucherSharedComponent, VoucherUpdateComponent, VoucherInPopupComponent, VoucherChiTietPopupComponent ],
    imports: [
        CommonModule,
        InputsModule,
        LayoutModule,
        MatDialogModule,
        MatTabsModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
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
        MatSelectModule,
        MatRadioModule,
        MatOptionModule,
        MatInputModule,
        MatCheckboxModule,
        GridModule,
        VoucherRoutingModule
    ],
    entryComponents: [
        VoucherInPopupComponent,
        VoucherChiTietPopupComponent
    ],
    providers: [
        VoucherService,
        { provide: BaseService, useClass: VoucherService },
    ],
})

export class VoucherModule { }
