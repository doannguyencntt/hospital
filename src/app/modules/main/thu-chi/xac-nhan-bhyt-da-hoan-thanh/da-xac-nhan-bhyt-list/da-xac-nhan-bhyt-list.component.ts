import { Component, OnInit, TemplateRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { MatDialog } from '@angular/material';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DaXacNhanBhytList } from '../xac-nhan-bhyt-da-hoan-thanh.model';
import { ListDuyetHistoryComponent } from '../list-duyet-history/list-duyet-history.component';
import icHistory from '@iconify/icons-ic/twotone-history';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-da-xac-nhan-bhyt-list',
    templateUrl: './da-xac-nhan-bhyt-list.component.html',
    styleUrls: ['./da-xac-nhan-bhyt-list.component.scss']
})
export class DaXacNhanBhytListComponent implements OnInit {
    constructor(
        private dialog: MatDialog,
        private authService: AuthService,
        private notificationService: NotificationService,
        private route: ActivatedRoute,
        private apiService: ApiService
    ) { }

    documentType: DocumentType;
    gridColumns: any[] = [];
    data: any = [];
    urlGetDataGridAsync = 'XacNhanBhytDaHoanThanh/GetDataForGridDaXacNhanAsync';
    icHistory = icHistory;
    thisId: number = this.route.snapshot.params.id;
    @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();
    @ViewChild('thanhTienBHYTThamKhaoTemplate', { static: true }) thanhTienBHYTThamKhaoTemplate: TemplateRef<any>;
    @ViewChild('templateDGBHYTCT', { static: true }) templateDGBHYTCT: TemplateRef<any>;
    @ViewChild('actionTemplateDaNhanBHYT', { static: true }) actionTemplateDaNhanBHYT: TemplateRef<any>;
    @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
    @ViewChild('donGiaGroupFooterTemplate', { static: true }) donGiaGroupFooterTemplate: TemplateRef<any>;
    @ViewChild('donGiaFooterTemplate', { static: true }) donGiaFooterTemplate: TemplateRef<any>;
    @ViewChild('gridDaXacNhan', { static: false }) gridDaXacNhanBHYT: GridComponent;
    @ViewChild('dgbhytThamKhaoTemplate', { static: true }) dgbhytThamKhaoTemplate: TemplateRef<any>;

    @ViewChild('donGiaBenhVienTemplate', { static: true }) donGiaBenhVienTemplate: TemplateRef<any>;
    @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;
    @ViewChild('thanhTienFooterTemplate', { static: true }) thanhTienFooterTemplate: TemplateRef<any>;
    @ViewChild('thanhTienGroupFooterTemplate', { static: true }) thanhTienGroupFooterTemplate: TemplateRef<any>;
    @ViewChild('ttBHYTChiTraTemplate', { static: true }) ttBHYTChiTraTemplate: TemplateRef<any>;
    @ViewChild('ttBHYTChiTraFooterTemplate', { static: true }) ttBHYTChiTraFooterTemplate: TemplateRef<any>;
    @ViewChild('orderTemplate', { static: true }) orderTemplate: TemplateRef<any>;
    @ViewChild('ttBHYTChiTraGroupFooterTemplate', { static: true }) ttBHYTChiTraGroupFooterTemplate: TemplateRef<any>;

    @ViewChild('bnThanhToanTemplate', { static: true }) bnThanhToanTemplate: TemplateRef<any>;
    @ViewChild('bnThanhToanFooterTemplate', { static: true }) bnThanhToanFooterTemplate: TemplateRef<any>;
    @ViewChild('bnThanhToanGroupFooterTemplate', { static: true }) bnThanhToanGroupFooterTemplate: TemplateRef<any>;
    @ViewChild('tiLeHuongTemplate', { static: true }) tiLeHuongTemplate: TemplateRef<any>;
    @ViewChild('tiLeTheoDvTemplate', { static: true }) tiLeTheoDvTemplate: TemplateRef<any>;
    @ViewChild('mucHuongTemplate', { static: true }) mucHuongTemplate: TemplateRef<any>;

    groups: GroupDescriptor[] = [{
        field: 'Nhom', aggregates: [
            { field: 'ThanhTienBenhVien', aggregate: 'sum' },
            { field: 'TtbhytChiTra', aggregate: 'sum' },
            { field: 'BnThanhToan', aggregate: 'sum' }
        ]
    }];

    public totalBNConPhaiThanhToan(field: any) {
        switch (field) {
            case 'BnThanhToan':
                return this.data.reduce((sum: number, item: DaXacNhanBhytList) => sum + item.BnThanhToan, 0);
        }
    }

    public totaLThanhTien(field: any) {
        switch (field) {
            case 'ThanhTienBenhVien':
                return this.data.reduce((sum: number, item: DaXacNhanBhytList) => sum + item.ThanhTienBenhVien, 0);
        }
    }

    public totalTTBHYTChiTra(field: any) {
        switch (field) {
            case 'TtbhytChiTra':
                return this.data.reduce((sum: number, item: DaXacNhanBhytList) => sum + item.TtbhytChiTra, 0);
        }
    }

    ngOnInit() {
        this.documentType = DocumentType.XacNhanBhytDaHoanThanh;
        this.thisId = this.route.snapshot.params.id;
        this.gridColumns = [
            { Field: 'STT', Title: '#', Width: 47, Template: this.orderTemplate },
            { Field: 'Nhom', Title: 'Nhóm', Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: 'MaDichVu', Title: 'Mã', Width: 92 },
            { Field: 'TenDichVu', Title: 'Tên dịch vụ', Width: 231, ShowTooltip: true },
            { Field: 'LoaiGia', Title: 'Loại giá', Width: 90 },
            { Field: 'SoLuong', Title: 'SL', Width: 45 },
            {
                Field: 'DonGiaBenhVien', Title: 'ĐG doanh thu', Width: 114,
                Template: this.donGiaBenhVienTemplate, TemplateGroupFooter: this.donGiaGroupFooterTemplate,
                TemplateFooter: this.donGiaFooterTemplate
            },
            {
                Field: 'ThanhTienBenhVien', Title: 'Thành Tiền', Width: 107,
                Template: this.thanhTienTemplate, TemplateFooter: this.thanhTienFooterTemplate,
                TemplateGroupFooter: this.thanhTienGroupFooterTemplate
            },
            { Field: 'DgbhytThamKhao', Title: 'ĐG BHYT', Width: 90, Template: this.dgbhytThamKhaoTemplate },
            { Field: 'ThanhTienBhytThamKhao', Title: 'Thành tiền BHYT', Width: 135, Template: this.thanhTienBHYTThamKhaoTemplate },
            { Field: 'TiLeDv', Title: 'Tỉ lệ theo dịch vụ (%)', Width: 161, Template: this.tiLeTheoDvTemplate },
            { Field: 'MucHuong', Title: 'Mức hưởng (%)', Width: 118, Template: this.mucHuongTemplate },
            { Field: 'DgbhytChiTra', Title: 'ĐG BHYT chi trả', Width: 130, Template: this.templateDGBHYTCT },
            {
                Field: 'TtbhytChiTra', Title: 'TT BHYT Chi Trả', Width: 130,
                Template: this.ttBHYTChiTraTemplate, TemplateFooter: this.ttBHYTChiTraFooterTemplate,
                TemplateGroupFooter: this.ttBHYTChiTraGroupFooterTemplate
            },
            {
                Field: 'BnThanhToan', Title: 'BN thanh toán', Width: 122,
                Template: this.bnThanhToanTemplate, TemplateFooter: this.bnThanhToanFooterTemplate,
                TemplateGroupFooter: this.bnThanhToanGroupFooterTemplate
            },
            { Field: 'Action', Title: '', Width: 55, Template: this.actionTemplateDaNhanBHYT }
        ];
    }

    onDataBoundChild(event: any) {
        this.data = event.Data;
        this.valueChange.emit();
    }

    lichSuXacNhan(data: any) {
        const self = this;
        const lichSuModel = {
            Id: data.IdDatabase,
            Group: data.GroupType
        };
        if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
            self.apiService.post('XacNhanBHYT/GetHistoryLog', lichSuModel).subscribe(
                (resultData: any) => {
                    const dataPassingToDanhSachPopUp = {
                        listHistory: resultData.Value.Value,
                        title: data.TenDichVu
                    };
                    self.dialog.open(ListDuyetHistoryComponent, {
                        disableClose: false,
                        width: '1200px',
                        data: { Title: 'Xác nhận', Model: dataPassingToDanhSachPopUp }
                    }).afterClosed().subscribe(() => { });
                });
        } else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    roundUp(num: number, precision: number) {
        precision = Math.pow(10, precision);
        return Math.ceil(num * precision) / precision;
    }
}
