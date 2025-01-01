import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuaTangRoutingModule } from './qua-tang-routing.module';
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
import { QuaTangService } from './qua-tang.service';
import { QuaTangListComponent } from './qua-tang-list/qua-tang-list.component';
import { QuaTangSharedComponent } from './qua-tang-shared/qua-tang-shared.component';
import { QuaTangCreateComponent } from './qua-tang-create/qua-tang-create.component';
import { QuaTangUpdateComponent } from './qua-tang-update/qua-tang-update.component';

@NgModule({
    declarations: [QuaTangListComponent, QuaTangSharedComponent, QuaTangCreateComponent, QuaTangUpdateComponent],
    imports: [
        CommonModule,
        QuaTangRoutingModule,
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
        GridModule
    ],
    entryComponents: [
    ],
    providers: [
        QuaTangService,
        { provide: BaseService, useClass: QuaTangService },
    ],
})

export class QuaTangModule { }
