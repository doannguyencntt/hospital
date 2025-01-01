import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { ThuocHoacHoatChatService } from './thuoc-hoac-hoat-chat.service';
import { BaseService } from 'src/app/core/services/base.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ThuocHoacHoatChatRoutingModule } from './thuoc-hoac-hoat-chat-routing.module';
import { ThuocHoacHoatChatListComponent } from './thuoc-hoac-hoat-chat-list/thuoc-hoac-hoat-chat-list.component';
import { ThuocHoacHoatChatCreateComponent } from './thuoc-hoac-hoat-chat-create/thuoc-hoac-hoat-chat-create.component';
import { ThuocHoacHoatChatUpdateComponent } from './thuoc-hoac-hoat-chat-update/thuoc-hoac-hoat-chat-update.component';
import { ThuocHoacHoatChatSharedComponent } from './thuoc-hoac-hoat-chat-shared/thuoc-hoac-hoat-chat-shared.component';
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
        ThuocHoacHoatChatListComponent,
        ThuocHoacHoatChatCreateComponent,
        ThuocHoacHoatChatUpdateComponent,
        ThuocHoacHoatChatSharedComponent
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
        ThuocHoacHoatChatRoutingModule
    ],
    providers: [
        ThuocHoacHoatChatService,
        { provide: BaseService, useClass: ThuocHoacHoatChatService },
    ]
})

export class ThuocHoacHoatChatModule { }
