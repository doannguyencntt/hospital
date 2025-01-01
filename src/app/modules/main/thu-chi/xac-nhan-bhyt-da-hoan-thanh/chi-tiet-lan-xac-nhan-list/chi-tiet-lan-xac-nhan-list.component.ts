import { Component, OnInit, ViewChild, TemplateRef, Output, EventEmitter } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DaXacNhanBhytList, LanXacNhanLogList } from '../xac-nhan-bhyt-da-hoan-thanh.model';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { AuthService } from 'src/app/core/services/auth.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-chi-tiet-lan-xac-nhan-list',
    templateUrl: './chi-tiet-lan-xac-nhan-list.component.html',
    styleUrls: ['./chi-tiet-lan-xac-nhan-list.component.scss']
})
export class ChiTietLanXacNhanListComponent implements OnInit {
    documentType: DocumentType;
    id = this.route.snapshot.params.id;
    data: DaXacNhanBhytList[] = [];
    lanXacNhanLog: LanXacNhanLogList[] = [];
    gridColumns: any[] = [];
    gridChildColumns: any[] = [];
    @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
    @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
    @ViewChild('donGiaBenhVienTemplate', { static: true }) donGiaBenhVienTemplate: TemplateRef<any>;
    @ViewChild('donGiaGroupFooterTemplate', { static: true }) donGiaGroupFooterTemplate: TemplateRef<any>;
    @ViewChild('donGiaFooterTemplate', { static: true }) donGiaFooterTemplate: TemplateRef<any>;
    @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;
    @ViewChild('thanhTienFooterTemplate', { static: true }) thanhTienFooterTemplate: TemplateRef<any>;
    @ViewChild('thanhTienGroupFooterTemplate', { static: true }) thanhTienGroupFooterTemplate: TemplateRef<any>;
    @ViewChild('dgbhytThamKhaoTemplate', { static: true }) dgbhytThamKhaoTemplate: TemplateRef<any>;
    @ViewChild('thanhTienBHYTThamKhaoTemplate', { static: true }) thanhTienBHYTThamKhaoTemplate: TemplateRef<any>;
    @ViewChild('templateDGBHYTCT', { static: true }) templateDGBHYTCT: TemplateRef<any>;
    @ViewChild('ttBHYTChiTraTemplate', { static: true }) ttBHYTChiTraTemplate: TemplateRef<any>;
    @ViewChild('ttBHYTChiTraFooterTemplate', { static: true }) ttBHYTChiTraFooterTemplate: TemplateRef<any>;
    @ViewChild('ttBHYTChiTraGroupFooterTemplate', { static: true }) ttBHYTChiTraGroupFooterTemplate: TemplateRef<any>;
    @ViewChild('orderTemplate', { static: true }) orderTemplate: TemplateRef<any>;
    @ViewChild('tiLeTheoDvTemplate', { static: true }) tiLeTheoDvTemplate: TemplateRef<any>;
    @ViewChild('mucHuongTemplate', { static: true }) mucHuongTemplate: TemplateRef<any>;
    urlGetDataGridParentAsync = 'XacNhanBhytDaHoanThanh/GetDataForDuyetBaoHiemAsync';
    urlGetDataGridChildAsync = 'XacNhanBhytDaHoanThanh/GetDataForGridDuyetBaoHiemChiTietAsync';
    currentMasterName: string = null;

    sort = [{
        field: 'Id',
        dir: 'asc'
    }];

    groups: GroupDescriptor[] = [{
        field: 'Nhom', aggregates: [
            { field: 'ThanhTienBenhVien', aggregate: 'sum' },
            { field: 'TtbhytChiTra', aggregate: 'sum' }
        ]
    }];

    public totalThanhTien(field: string, id: string) {
        const self = this;
        switch (field) {
            case 'ThanhTienBenhVien': {
                if (self.lanXacNhanLog.length !== 0 && self.lanXacNhanLog.filter(x => x.Id === Number(id)).length !== 0) {
                    return self.lanXacNhanLog.filter(x => x.Id === Number(id))[0].
                        DaXacNhanBhyt.reduce((sum, item) => sum + item.ThanhTienBenhVien, 0);
                }
                return 0;
            }
            case 'TtbhytChiTra': {
                if (self.lanXacNhanLog.length !== 0 && self.lanXacNhanLog.filter(x => x.Id === Number(id)).length !== 0) {
                    return self.lanXacNhanLog.filter(x => x.Id === Number(id))[0].
                        DaXacNhanBhyt.reduce((sum, item) => sum + item.TtbhytChiTra, 0);
                }
                return 0;
            }
            default: {
                return 0;
            }
        }
    }

    constructor(
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.documentType = DocumentType.XacNhanBhytDaHoanThanh;
        this.gridColumns = [
            { Field: 'Id', Title: 'Mã XN', Width: 85 },
            { Field: 'NguoiXacNhan', Title: 'Người Xác Nhận', Width: 1123 },
            { Field: 'NgayXacNhan', Title: 'Ngày Xác Nhận', Width: 458 },
        ];
        this.gridChildColumns = [
            { Field: 'STT', Title: '#', Width: 25, Template: this.orderTemplate },
            { Field: 'Nhom', Title: 'Nhóm', Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: 'MaDichVu', Title: 'Mã', Width: 73 },
            { Field: 'TenDichVu', Title: 'Tên dịch vụ', Width: 318, ShowTooltip: true },
            { Field: 'LoaiGia', Title: 'Loại giá', Width: 86 },
            { Field: 'SoLuong', Title: 'SL', Width: 40 },
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
            { Field: 'DgbhytThamKhao', Title: 'ĐG BHYT', Width: 94, Template: this.dgbhytThamKhaoTemplate },
            { Field: 'ThanhTienBhytThamKhao', Title: 'Thành tiền BHYT', Width: 140, Template: this.thanhTienBHYTThamKhaoTemplate },
            { Field: 'TiLeDv', Title: 'Tỉ lệ theo dịch vụ (%)', Width: 161, Template: this.tiLeTheoDvTemplate },
            { Field: 'MucHuong', Title: 'Mức hưởng (%)', Width: 118, Template: this.mucHuongTemplate },
            { Field: 'DgbhytChiTra', Title: 'ĐG BHYT chi trả', Width: 126, Template: this.templateDGBHYTCT },
            {
                Field: 'TtbhytChiTra', Title: 'TT BHYT Chi Trả', Width: 214,
                Template: this.ttBHYTChiTraTemplate, TemplateFooter: this.ttBHYTChiTraFooterTemplate,
                TemplateGroupFooter: this.ttBHYTChiTraGroupFooterTemplate
            }
        ];
    }

    onDataBoundForChildren(event: any) {
        const duyetChiTiet: DaXacNhanBhytList[] = [];
        this.data = event.Data;
        this.data.forEach(duyetChiTietItem => {
            duyetChiTiet.push(duyetChiTietItem);
        });

        let lanXacNhan = new LanXacNhanLogList();
        lanXacNhan = {
            Id: Number(this.currentMasterName),
            DaXacNhanBhyt: duyetChiTiet
        };
        this.lanXacNhanLog.push(lanXacNhan);
    }

    setMasterName(eventData: any) {
        this.currentMasterName = eventData.dataItem.Id.toString();
    }

    removeLog(eventData: any) {
        const deletedPosition = this.lanXacNhanLog.indexOf(this.lanXacNhanLog.filter(x => x.Id === eventData.dataItem.Id)[0]);
        this.lanXacNhanLog.splice(deletedPosition, 1);
    }
}
