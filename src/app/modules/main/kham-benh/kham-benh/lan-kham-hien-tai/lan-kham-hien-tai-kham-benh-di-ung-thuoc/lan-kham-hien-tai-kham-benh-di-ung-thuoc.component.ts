import { Component, OnInit, Input, ViewChild, TemplateRef, SimpleChanges } from '@angular/core';
import { DiUng, BenhVienHangDoi } from '../../../kham-benh.model';
import icAdd from '@iconify/icons-ic/twotone-add';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icAddCircle from '@iconify/icons-ic/add-circle';
import icEdit from '@iconify/icons-ic/sharp-edit';
import icSave from '@iconify/icons-ic/outline-save';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApiService } from 'src/app/core/services/api.service';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
    selector: 'app-lan-kham-hien-tai-kham-benh-di-ung-thuoc',
    templateUrl: './lan-kham-hien-tai-kham-benh-di-ung-thuoc.component.html',
    styleUrls: ['./lan-kham-hien-tai-kham-benh-di-ung-thuoc.component.scss']
})
export class LanKhamHienTaiKhamBenhDiUngThuocComponent implements OnInit {


    icAdd = icAdd;
    icDelete = icDelete;
    icAddCircle = icAddCircle;
    icEdit = icEdit;
    icSave = icSave;
    validationErrors: any;
    gridDiUngThuocColumns: any[] = [];
    documentType: DocumentType;
    isShowView: boolean = false;
    count: number = 1; // biến này chỉ dùng để gán tạm giá trị
    dataSourceDiUng: any = {
        data: [],
        total: 0
    }
    tenThuocCurrent: string = null;
    @ViewChild('loaiDiUngTemplate', { static: true }) loaiDiUngTemplate: TemplateRef<any>;
    @ViewChild('tenThuocTemplate', { static: true }) tenThuocTemplate: TemplateRef<any>;
    @ViewChild('bieuHienDiUngTemplate', { static: true }) bieuHienDiUngTemplate: TemplateRef<any>;
    @ViewChild('mucDoTemplate', { static: true }) mucDoTemplate: TemplateRef<any>;
    @ViewChild('actionDiUngThuocTemplate', { static: true }) actionDiUngThuocTemplate: TemplateRef<any>;
    
    benhNhanHienTai = new BenhVienHangDoi();
    @Input() data: any = null;
    @Input() dataDiUngThuoc: any = null;
    @Input() isReadOnly: boolean = false;
    @Input() laChuyenKhoaKhamNhieu: boolean = false;

    constructor(private apiService: ApiService, private dialog: MatDialog, private notificationService: NotificationService) { }

    ngOnInit() {
        this.benhNhanHienTai = this.data;
        this.documentType = DocumentType.KhamBenh;
        this.gridDiUngThuocColumns = [
            { Field: "TenLoaiDiUng", Title: "Loại dị ứng", Width: 150, Template: this.loaiDiUngTemplate },
            { Field: "TenDiUng", Title: "Tên dị ứng", Width: 300, Template: this.tenThuocTemplate },
            { Field: "BieuHienDiUng", Title: "Biểu hiện dị ứng", MinWidth: 200, Template: this.bieuHienDiUngTemplate },
            { Field: "MucDo", Title: "Mức độ", MinWidth: 120, Template: this.mucDoTemplate },
            { Field: "Action", Title: "", Width: 80, Template: this.actionDiUngThuocTemplate, Hidden: this.isReadOnly }
        ];

        //this.getTableBenhNhanDiUngThuoc(this.benhNhanHienTai.YeuCauTiepNhan.BenhNhanId);

        this.dataSourceDiUng.data = this.dataDiUngThuoc;
    }

    ngOnChanges(changes: SimpleChanges) {
        if(changes['dataDiUngThuoc'] && changes['dataDiUngThuoc'].previousValue != null && changes['dataDiUngThuoc'].previousValue != changes['dataDiUngThuoc'].currentValue)
        {
            this.dataSourceDiUng.data = changes['dataDiUngThuoc'].currentValue;
        }
    }

    changeData() {
        this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh = true;
    }

    getTableBenhNhanDiUngThuoc(idBenhNhan: number) {
        var queryObject: any = {
            skip: 0,
            take: 50,
            pageSize: 50,
            searchString: "PEFkdmFuY2VkUXVlcnlQYXJhbWV0ZXJzPjxTZWFyY2hUZXJtcz4yPC9TZWFyY2hUZXJtcz48L0FkdmFuY2VkUXVlcnlQYXJhbWV0ZXJzPg==",
            additionalSearchString: idBenhNhan.toString(),
            searchTerms: null,
            sort: [{ field: "TenThuoc", dir: "asc" }],
            lazyLoadPage: true,
        };

        this.apiService.post<any>("KhamBenh/GetDataGridBenhNhanDiUngThuoc", queryObject).subscribe(resultData => {
            if (resultData !== undefined && resultData != null) {
                this.dataSourceDiUng.data = resultData.Value.Data;
            }
        });
    }

    themDiUngThuoc() {
        let diUngThuoc = new DiUng();
        this.dataSourceDiUng.data.push(diUngThuoc);
        this.changeData();
    }

    chonThuoc(event, dataItem){
        if(event != undefined)
        {
            dataItem.TenDiUng = event.DisplayName;
        }
        else
        {
            dataItem.TenDiUng = null;
        }
    }

    // luuDiUngThuoc(item: any) {
    //     if (item.LoaiDiUng === null) {
    //         item.LoaiDiUng = 0;
    //     }

    //     if (item.ThuocId === null) {
    //         item.ThuocId = 0;
    //     }

    //     if (item.ThuocId === 0 && item.LoaiDiUng !== 1) {
    //         // đây là điều kiện ở mức độ lươn lẹo ở chỗ hardcode cho ThuocId sẽ ko bị null, vì khi loại dị ứng nó != 1
    //         // thì không cần care ThuocId nó có empty hay ko, do đó sẽ ko bắt validation cho ThuocId trong trường
    //         // hợp loại dị ứng != 1 
    //         item.ThuocId = 1;
    //     }

    //     if (item.TenDiUng === null && item.LoaiDiUng === 1) {
    //         item.TenDiUng = "null";
    //     }
    //     this.validationErrors = [];

    //     item.BenhNhanId = this.benhNhanHienTai.YeuCauTiepNhan.BenhNhanId;
    //     this.apiService.post("KhamBenh/LuuDiUngThuoc", item).subscribe(
    //         (resultData: any) => {
    //             item.Id = resultData.Id;
    //             item.TenLoaiDiUng = resultData.LoaiDiUng;
    //             if (item.TenDiUng === "null") {
    //                 item.TenDiUng = resultData.TenDiUng;
    //             }
    //             item.TenMucDo = resultData.TenMucDo;
    //             this.isShowView = false;
    //             this.resetDiUng();
    //         }, (err: ApiError) => {
    //             this.validationErrors = err.ValidationErrors;
    //         });

    // }

    xoaDiUngThuoc(item) {
        this.isShowView = false;
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["xóa"]) }
        }).afterClosed().subscribe(result => {
            if (result === 'Yes') {
                this.changeData();
                this.dataSourceDiUng.data.splice(this.dataSourceDiUng.data.findIndex(x => x == item), 1);
            }
        });
    }

    onSelectLoaiDiUng(event: any, dataItem: any) {
        dataItem.idLoaiDiUng = event.KeyId;
        dataItem.TenLoaiDiUng = event.DisplayName;
        if (dataItem.idLoaiDiUng === 1) {
            dataItem.ThuocId = 0;
        } else {
            dataItem.TenDiUng = null;
        }
    }

    chonMucDo(event: any, dataItem: any)
    {
        if(event != undefined && event != null)
        {
            dataItem.TenMucDo = event.DisplayName;
        }
        else
        {
            dataItem.TenMucDo = null;
        }
    }

    //bvhd-3856
    suaDiUngThuoc(item) {
        item.IsUpdate = true;
        this.changeData();
    }
}
