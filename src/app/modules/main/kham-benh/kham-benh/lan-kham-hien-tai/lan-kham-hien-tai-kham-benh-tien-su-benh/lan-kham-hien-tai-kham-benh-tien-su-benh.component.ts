import { Component, OnInit, TemplateRef, ViewChild, Input, SimpleChanges } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icAdd from '@iconify/icons-ic/twotone-add';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icAddCircle from '@iconify/icons-ic/add-circle';
import icEdit from '@iconify/icons-ic/sharp-edit';
import icSave from '@iconify/icons-ic/outline-save';
import { TienSuBenh, BenhVienHangDoi, } from '../../../kham-benh.model';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ApiService } from 'src/app/core/services/api.service';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
    selector: 'app-lan-kham-hien-tai-kham-benh-tien-su-benh',
    templateUrl: './lan-kham-hien-tai-kham-benh-tien-su-benh.component.html',
    styleUrls: ['./lan-kham-hien-tai-kham-benh-tien-su-benh.component.scss']
})

export class LanKhamHienTaiKhamBenhTienSuBenhComponent implements OnInit {

    icAdd = icAdd;
    icDelete = icDelete;
    icAddCircle = icAddCircle;
    icEdit = icEdit;
    icSave = icSave;
    isAllowAdd: boolean = true;

    gridTienSuBenhColumns: any[] = [];
    documentType: DocumentType;
    dataSourceTienSu: any = {
        data: [],
        total: 0
    }
    tenBenhCurrent: string = null;
    validationErrors: any;
    count: number = 1; // biến này chỉ dùng để gán tạm giá trị

    @ViewChild('actionTienSuBenhTemplate', { static: true }) actionTienSuBenhTemplate: TemplateRef<any>;
    @ViewChild('loaiTienSuBenhTemplate', { static: true }) loaiTienSuBenhTemplate: TemplateRef<any>;
    @ViewChild('tienSuBenhTemplate', { static: true }) tienSuBenhTemplate: TemplateRef<any>;
    benhNhanHienTai = new BenhVienHangDoi();
    @Input() data: any = null;
    @Input() dataTienSuBenh: any = null;
    @Input() isReadOnly: boolean = false;
    @Input() laChuyenKhoaKhamNhieu: boolean = false;

    constructor(private apiService: ApiService, private dialog: MatDialog, private notificationService: NotificationService) { }

    ngOnInit() {
        this.benhNhanHienTai = this.data;
        this.documentType = DocumentType.KhamBenh;

        this.gridTienSuBenhColumns = [
            { Field: "TenLoaiTienSuBenh", Title: "Loại tiền sử bệnh", Width: 150, Template: this.loaiTienSuBenhTemplate },
            { Field: "TenBenh", Title: "Tên bệnh", Width: 450, Template: this.tienSuBenhTemplate },
            { Field: "Action", Title: "", Width: 50, Template: this.actionTienSuBenhTemplate, Hidden: this.isReadOnly }
        ];

        //this.getTableTienSuBenh(this.benhNhanHienTai.YeuCauTiepNhan.BenhNhanId);
        this.dataSourceTienSu.data = this.dataTienSuBenh;
    }

    ngOnChanges(changes: SimpleChanges) {
        if(changes['dataTienSuBenh'] && changes['dataTienSuBenh'].previousValue != null && changes['dataTienSuBenh'].previousValue != changes['dataTienSuBenh'].currentValue)
        {
            this.dataSourceTienSu.data = changes['dataTienSuBenh'].currentValue;
        }
    }

    getTableTienSuBenh(idBenhNhan: number) {
        var queryObject: any = {
            skip: 0,
            take: 50,
            pageSize: 50,
            searchString: "PEFkdmFuY2VkUXVlcnlQYXJhbWV0ZXJzPjxTZWFyY2hUZXJtcz4yPC9TZWFyY2hUZXJtcz48L0FkdmFuY2VkUXVlcnlQYXJhbWV0ZXJzPg==",
            additionalSearchString: idBenhNhan.toString(),
            searchTerms: null,
            sort: [{ field: "TenBenh", dir: "asc" }],
            lazyLoadPage: true,
        };

        this.apiService.post<any>("KhamBenh/GetDataGridTienSuBenh", queryObject).subscribe(resultData => {
            if (resultData !== undefined && resultData != null) {
                this.dataSourceTienSu.data = resultData.Value.Data;
            }
        });
    }

    themTienSuBenh() {
        this.dataSourceTienSu.data.push(new TienSuBenh());
        this.changeData();
    }

    changeData() {
        this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh = true;
    }

    // luuTienSuBenh(item: any) {
    //     // this.validationErrors = [];

    //     item.BenhNhanId = this.benhNhanHienTai.YeuCauTiepNhan.BenhNhanId;
    //     this.apiService.post("KhamBenh/LuuTienSuBenh", item).subscribe(
    //         (resultData: any) => {
    //             item.Id = resultData.Id;
    //             item.NgayPhatHien = resultData.NgayPhatHien;
    //             this.isAllowAdd = true;
    //         }, (err: ApiError) => {
    //             // this.validationErrors = err.ValidationErrors;
    //             if (err.Message != "Validation Failed") {
    //                 this.notificationService.showError(err.Message);
    //               }
    //         });
    // }

    checkExist(tenBenh: string) {
        let len = this.dataSourceTienSu.data.length;

        for (let i = 0; i < len; i++) {
            if (len - 1 === i) {
                continue;
            }

            if (this.dataSourceTienSu.data[i].TenBenh === tenBenh) {
                return true;
            }
        }

        return false;
    }

    xoaTienSuBenh(item) {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["xóa"]) }
        }).afterClosed().subscribe(result => {
            if (result === 'Yes') {
                this.dataSourceTienSu.data.splice(this.dataSourceTienSu.data.findIndex(x => x == item), 1);
                this.changeData();
            }
        });
    }

    chonLoaiTienSuBenh(event, item)
    {
        if(event != undefined && event != null)
        {
            item.TenLoaiTienSuBenh = event.DisplayName;
        }
        else
        {
            item.TenLoaiTienSuBenh = null;
        }
    }

    //BVHD-3856
    suaTienSuBenh(item) {
        item.IsUpdate = true;
        this.changeData();
    }
}
