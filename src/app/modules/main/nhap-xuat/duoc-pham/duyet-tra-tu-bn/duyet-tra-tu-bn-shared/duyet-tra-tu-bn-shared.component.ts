import { Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { DuyetTraThuocTuBn } from '../duyet-tra-tu-bn.model';
import icInfo from '@iconify/icons-ic/baseline-info';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-duyet-tra-thuoc-tu-bn-shared',
    templateUrl: './duyet-tra-tu-bn-shared.component.html',
    styleUrls: ['./duyet-tra-tu-bn-shared.component.scss']
})
export class DuyetTraThuocTuBnSharedComponent implements OnInit {
    validationErrors: any;
    id: number;
    documentType: DocumentType;
    gridColumns: any[] = [];
    gridYeuCauChiTietColumns: any[] = [];
    gridDataSource: any;
    urlGetDataChuaDuyetGrid = 'TongHopDuTruMuaVatTuTaiGiamDoc/GetDataForGridChildChuaDuyetAsync';
    urlGetDataDuyetGrid = 'TongHopDuTruMuaVatTuTaiGiamDoc/GetDataForGridChildDuyetAsync';
    urlGetDataGridChild = 'TongHopDuTruMuaVatTuTaiGiamDoc/GetDataForGridDuyetDetail';
    urlGetDataBenhNhanDuyet: string = "YeuCauTraThuocTuBenhNhan/GetDataForGridAsyncBenhNhanChild";

    khos: any[] = [];
    hdts: any[] = [];
    duyetTraThuocTuBn = {} as DuyetTraThuocTuBn;
    @ViewChild('ngayDieuTriTemplate', { static: true }) ngayDieuTriTemplate: TemplateRef<any>;
    @ViewChild('ngayTraTemplate', { static: true }) ngayTraTemplate: TemplateRef<any>;
    @ViewChild('benhNhanGroupHeaderTemplate', { static: true }) benhNhanGroupHeaderTemplate: TemplateRef<any>;
    @ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;
    @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;
    groupBenhNhan: GroupDescriptor[] = [{ field: 'BenhNhan' }];
    urlGetDataDuocPham = 'DuyetTraThuocTuBn/GetDataForGridAsyncDuocPhamChild';
    urlGetDataBenhNhan = 'DuyetTraThuocTuBn/GetDataForGridAsyncBenhNhanChild';
    sort: SortDescriptor[] =
        [
            {
                field: 'Id',
                dir: 'asc'
            }
        ];
    icInfo = icInfo;

    groups: GroupDescriptor[] = [{
        field: 'Khoa', aggregates: [
            { field: 'SoLuongDuTru', aggregate: 'sum' },
            { field: 'SoLuongDuKienTrongKy', aggregate: 'sum' }
        ]
    }];
    @Output() fireStatus = new EventEmitter<any>();
    @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
    constructor(private route: ActivatedRoute, private baseService: BaseService) { }

    ngOnInit() {
        this.id = this.route.snapshot.params.id;
        this.documentType = DocumentType.DuyetTraThuocTuBenhNhan;

        this.gridColumns = [
            { Field: 'Nhom', Title: 'Nhóm', Width: 50, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: 'DuocPham', Title: 'Dược phẩm', Width: 120 },
            { Field: 'HoatChat', Title: 'Hoạt chất', Width: 150, Sortable: false },
            { Field: 'Dvt', Title: 'ĐVT', Width: 150, Sortable: false },
            { Field: 'TongSlChiDinh', Title: 'Tổng SL chỉ định', Width: 150, Sortable: false },
            { Field: 'TongSlDaTra', Title: 'Tổng SL đã trả', Width: 150, Sortable: false },
            { Field: 'TongSlTraLanNay', Title: 'Tổng SL trả lần này', Width: 150, Sortable: false }
        ];

        this.gridYeuCauChiTietColumns = [
            { Field: "NgayDieuTri", Title: "Ngày Điều Trị", Width: 120, Sortable: false, Template: this.ngayDieuTriTemplate },
            { Field: "NgayTra", Title: "Ngày Trả", Width: 150, Sortable: false, Template: this.ngayTraTemplate },
            { Field: "BenhNhan", Title: "", Width: 150, Sortable: false, Hidden: true, TemplateGroupHeader: this.benhNhanGroupHeaderTemplate },
            { Field: "NhanVienYeuCau", Title: "Người trả", Width: 150, Sortable: false },
            { Field: "SoLuongTraLanNay", Title: "SL trả lần này", Width: 150, Sortable: false },
            { Field: "DonGia", Title: "Đơn giá", Width: 150, Sortable: false, Template: this.donGiaTemplate },
            { Field: "ThanhTien", Title: "Thành tiền", Width: 150, Sortable: false, Template: this.thanhTienTemplate },
        ];

        if (this.id) {
            this.getById(this.id);
        }
    }

    getById(id: number) {
        this.baseService.getById<DuyetTraThuocTuBn>(id).subscribe(resultData => {
            this.duyetTraThuocTuBn = { ...resultData };
            this.fireStatus.emit(this.duyetTraThuocTuBn.TinhTrang);
        });
    }
}
