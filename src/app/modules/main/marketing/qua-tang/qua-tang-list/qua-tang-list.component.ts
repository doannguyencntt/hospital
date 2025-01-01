import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';
import { MatDialog } from '@angular/material';

import icDone from '@iconify/icons-ic/twotone-done';
import icClose from '@iconify/icons-ic/twotone-close';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';

@Component({
    selector: 'app-qua-tang-list',
    templateUrl: './qua-tang-list.component.html',
    styleUrls: ['./qua-tang-list.component.scss']
})
export class QuaTangListComponent implements OnInit {
    documentType: DocumentType = DocumentType.QuaTangMarketing;

    gridColumns: any[] = [];

    icdone = icDone;
    icclose = icClose;
    icDelete = icDelete;
    icEdit = icEdit;
    icMoreHoriz = icMoreHoriz;

    @ViewChild('hieuLucTemplate', { static: true }) hieuLucTemplate: TemplateRef<any>;
    @ViewChild(GridComponent, {static: false}) gridChild: GridComponent;

    constructor(private authService: AuthService, private notificationService: NotificationService, private apiService: ApiService,
                private dialog: MatDialog) { }

    ngOnInit() {
        this.gridColumns = [
            { Field: "Ten", Title: "Tên", Width: 200, Sortable: true, LinkDetail: true },
            { Field: "DonViTinh", Title: "Đơn vị tính", Width: 150, Sortable: true },
            { Field: "MoTa", Title: "Mô tả", Width: 200, Sortable: true },
            { Field: "HieuLuc", Title: "Tình trạng", Width: 150, Template: this.hieuLucTemplate }
        ];
    }

    updateTinhTrang(dataItem: any) {
        let self = this;
        let comfirm = dataItem.HieuLuc ? "ngừng sử dụng" : "sử dụng";
    
        if(self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
            this.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: '400px',
                data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessLockTemplate, [comfirm, "quà tặng"]) }
            }).afterClosed().subscribe(res => {/* result is a string:Yes,No,No answer*/
                if (res == "Yes") {
                    self.apiService.post(`QuaTang/KichHoatTrangThai?id=${dataItem.Id}`).subscribe(() => {
                        self.gridChild.search();
            
                        dataItem.HieuLuc ?
                        self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Ngừng sử dụng"])) :
                        self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Sử dụng"]));
                    }, (err: any) => {
                        self.notificationService.showError(err.Message);
                    });
                }
            });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    exportExcel() {
        this.dialog.open(LoadingComponent, {
          disableClose: true,
          width: '200px',
          height: '90px',
          data: { Title: 'Đang xuất excel...' }
        });
        
        if(this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
          this.apiService.postExportExcel<string>("QuaTang/ExportQuaTang", this.gridChild._gridQueryInfo).subscribe(res => {
            let dateTimeNow = new Date();
            CommonService.downLoadFile(res, "application/vnd.ms-excel", "QuaTang" + dateTimeNow.getFullYear() + ".xlsx");
            this.dialog.closeAll();
          }, err => {
            this.notificationService.showError(err.Message);
            this.dialog.closeAll();
          })
        } else {
          this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
      }  
}
