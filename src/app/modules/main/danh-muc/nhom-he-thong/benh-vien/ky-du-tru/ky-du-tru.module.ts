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
import { KyDuTruService } from './ky-du-tru.service';
import { KyDuTruRoutingModule } from './ky-du-tru-routing.module';
import { KyDuTruListComponent } from './ky-du-tru-list/ky-du-tru-list.component';
import { KyDuTruCreateComponent } from './ky-du-tru-create/ky-du-tru-create.component';
import { KyDuTruUpdateComponent } from './ky-du-tru-update/ky-du-tru-update.component';
import { KyDuTruSharedComponent } from './ky-du-tru-shared/ky-du-tru-shared.component';

@NgModule({
	declarations: [KyDuTruListComponent, KyDuTruCreateComponent, KyDuTruUpdateComponent, KyDuTruSharedComponent],
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
		KyDuTruRoutingModule
    ],
    entryComponents: [
    ],
    providers: [
        KyDuTruService,
        { provide: BaseService, useClass: KyDuTruService },
    ],
})

export class KyDuTruModule { }