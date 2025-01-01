import { Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { DuyetTraVatTuTuBn } from '../duyet-tra-tu-bn.model';
import icInfo from '@iconify/icons-ic/baseline-info';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-duyet-tra-vat-tu-tu-bn-shared',
    templateUrl: './duyet-tra-tu-bn-shared.component.html',
    styleUrls: ['./duyet-tra-tu-bn-shared.component.scss']
})
export class DuyetTraVatTuTuBnSharedComponent implements OnInit {
    validationErrors: any;
    id: number;
    documentType: DocumentType;
    gridColumns: any[] = [];
    gridYeuCauChiTietColumns: any[] = [];
    gridDataSource: any;
    khos: any[] = [];
    hdts: any[] = [];
    duyetTraVatTuTuBn = {} as DuyetTraVatTuTuBn;
    @ViewChild('ngayDieuTriTemplate', { static: true }) ngayDieuTriTemplate: TemplateRef<any>;
    @ViewChild('ngayTraTemplate', { static: true }) ngayTraTemplate: TemplateRef<any>;
    @ViewChild('benhNhanGroupHeaderTemplate', { static: true }) benhNhanGroupHeaderTemplate: TemplateRef<any>;
    @ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;
    @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;
    groupBenhNhan: GroupDescriptor[] = [{ field: 'BenhNhan' }];
    urlGetDataVatTu = 'DuyetTraVatTuTuBn/GetDataForGridAsyncVatTuChild';
    // urlGetDataBenhNhan = 'DuyetTraVatTuTuBn/GetDataForGridAsyncBenhNhanChild';
    urlGetDataBenhNhan: string = "YeuCauTraVatTuTuBenhNhan/GetDataForGridAsyncBenhNhanChild";

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
        this.documentType = DocumentType.DuyetTraVatTuTuBenhNhan;

        this.gridColumns = [
            { Field: 'Nhom', Title: 'Nhóm', Width: 50, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: 'VatTu', Title: 'Dược phẩm', Width: 120 },
            { Field: 'Dvt', Title: 'ĐVT', Width: 150, Sortable: false },
            { Field: 'TongSlChiDinh', Title: 'Tổng SL chỉ định', Width: 150, Sortable: false },
            { Field: 'TongSlDaTra', Title: 'Tổng SL đã trả', Width: 150, Sortable: false, },
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
        this.baseService.getById<DuyetTraVatTuTuBn>(id).subscribe(resultData => {
            this.duyetTraVatTuTuBn = { ...resultData };
            console.log("data: ", this.duyetTraVatTuTuBn)
            this.fireStatus.emit(this.duyetTraVatTuTuBn.TinhTrang);
        });
    }
}
