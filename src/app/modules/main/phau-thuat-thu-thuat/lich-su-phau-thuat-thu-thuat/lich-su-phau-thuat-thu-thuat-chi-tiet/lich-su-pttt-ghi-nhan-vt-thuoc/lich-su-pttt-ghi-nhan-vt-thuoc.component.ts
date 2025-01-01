import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { ApiError } from 'src/app/shared/models/api-error.model';

@Component({
    selector: 'app-lich-su-pttt-ghi-nhan-vt-thuoc',
    templateUrl: './lich-su-pttt-ghi-nhan-vt-thuoc.component.html',
    styleUrls: ['./lich-su-pttt-ghi-nhan-vt-thuoc.component.scss']
})
export class LichSuPtttGhiNhanVtThuocComponent implements OnInit {
    gridColumns: any[] = [];
    gridDataSource: any[] = [];
    documentType: DocumentType = DocumentType.LichSuPhauThuatThuThuat;
    gridDataSourceVTTHThuoc: any = {};
    gridVTTHThuocColumns: any[] = [];
    @Input() yeuCauDichVuKyThuatId: number;

    //Ghi nhận vật tư/ thuốc
    @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
    @ViewChild('nhomGroupHeaderVTTemplate', { static: true }) nhomGroupHeaderVTTemplate: TemplateRef<any>;
    @ViewChild('donGiaVTTemplate', { static: true }) donGiaVTTemplate: TemplateRef<any>;
    @ViewChild('donGiaVTFooterTemplate', { static: true }) donGiaVTFooterTemplate: TemplateRef<any>;
    @ViewChild('soLuongGhiNhanVTTHThuocTemplate', { static: true }) soLuongGhiNhanVTTHThuocTemplate: TemplateRef<any>;
    @ViewChild('thanhTienVTTemplate', { static: true }) thanhTienVTTemplate: TemplateRef<any>;
    @ViewChild('thanhTienGhiNhanVTTHThuocFooterTemplate', { static: true }) thanhTienGhiNhanVTTHThuocFooterTemplate: TemplateRef<any>;
    @ViewChild('thanhTienGhiNhanVTTHThuocGroupFooterTemplate', { static: true }) thanhTienGhiNhanVTTHThuocGroupFooterTemplate: TemplateRef<any>;
    @ViewChild('donGiaBaoHiemVTTemplate', { static: true }) donGiaBaoHiemVTTemplate: TemplateRef<any>;
    @ViewChild('duocHuongBaoHiemGhiNhanVHTTTemplate', { static: true }) duocHuongBaoHiemGhiNhanVHTTTemplate: TemplateRef<any>;
    @ViewChild('gridVTTHThuoc', { read: GridComponent, static: false }) gridChildVTTHThuoc: GridComponent;
    @ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;
    @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;
    @ViewChild('tinhPhiGhiNhanVHTTTemplate', { static: true }) tinhPhiGhiNhanVHTTTemplate: TemplateRef<any>;
    groupsGhiNhanVTHHThuoc: GroupDescriptor[] = [{ field: 'GiaiDoanPhauThuatDisplay', dir: null, aggregates: [{ field: 'ThanhTien', aggregate: 'sum' }] }];

    constructor(private apiService: ApiService) { }

    ngOnInit() {
        //Ghi nhận vật tư/ thuốc
        this.gridVTTHThuocColumns = [
            // { Field: "STT", Title: "#", Width: 40, Template: this.sttTemplate },
            { Field: "GiaiDoanPhauThuatDisplay", Title: "GiaiDoanPhauThuat", Width: 150, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderVTTemplate },
            { Field: "TenDichVuYeuCau", Title: "Tên vật tư/thuốc", Width: 130, ShowTooltip: true },
            { Field: "DonViTinh", Title: "ĐVT", Width: 60 },
            { Field: "TenKho", Title: "Kho sử dụng", Width: 100 },
            { Field: "TenDuongDung", Title: "Đường dùng", Width: 100 },
            { Field: "DonGia", Title: "Đơn Giá", Width: 80, Template: this.donGiaTemplate, TemplateFooter: this.donGiaVTFooterTemplate },
            { Field: "SoLuong", Title: "SL", Width: 59, Template: this.soLuongGhiNhanVTTHThuocTemplate },
            { Field: "ThanhTien", Title: "Thành Tiền", Width: 100, Template: this.thanhTienTemplate, TemplateFooter: this.thanhTienGhiNhanVTTHThuocFooterTemplate, TemplateGroupFooter: this.thanhTienGhiNhanVTTHThuocGroupFooterTemplate },
            { Field: "DonGiaBaoHiem", Title: "DG BHYT", Width: 100, Template: this.donGiaBaoHiemVTTemplate },
            { Field: "DuocHuongBaoHiem", Title: "ĐH BHYT", Width: 60, Template: this.duocHuongBaoHiemGhiNhanVHTTTemplate },
            { Field: "TinhPhi", Title: "Tính phí", Width: 60, Template: this.tinhPhiGhiNhanVHTTTemplate },
            { Field: "PhieuLinh", Title: "Phiếu lĩnh", Width: 90 },
            { Field: "PhieuXuat", Title: "Phiếu xuất", Width: 90 },
            // { Field: "TenNhanVienChiDinh", Title: "Người chỉ định", Width: 150, },
            { Field: "ThoiGianChiDinhDisplay", Title: "Thời gian chỉ định", Width: 150,},
        ];
        if (this.yeuCauDichVuKyThuatId != null) {
            this.getGridDataGhiNhanVTHHThuoc(this.yeuCauDichVuKyThuatId);
        }
    }

    ngOnChanges() {
        if (this.yeuCauDichVuKyThuatId != null) {
            this.getGridDataGhiNhanVTHHThuoc(this.yeuCauDichVuKyThuatId);
        }
    }

    totalGhiNhanVTTHThuoc(field: any) {
        if (this.gridDataSourceVTTHThuoc.data != undefined) {
            switch (field) {
                case 'ThanhTien':
                    return this.gridDataSourceVTTHThuoc.data.reduce((sum, item) => sum + item.ThanhTien, 0);
            }
        }
    }
    getGridDataGhiNhanVTHHThuoc(yeuCauDichVuKyThuatId: any) {
        var url = `PhauThuatThuThuat/GetGridDataGhiNhanVTTHThuoc?yeuCauDichVuKyThuatId=${yeuCauDichVuKyThuatId}`;
        this.apiService.get<any>(url).subscribe(res => {
            if (res) {
                this.gridDataSourceVTTHThuoc = {
                    data: res,
                    total: res.length
                }
                if (this.gridChildVTTHThuoc !== undefined) {
                    this.gridChildVTTHThuoc.gridDataSource = this.gridDataSourceVTTHThuoc;
                    this.gridChildVTTHThuoc.setDataSource();
                }
            }
        }, (err: ApiError) => {
        });
    }

}
