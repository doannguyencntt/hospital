import { Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApproveData, ChiTietDuocPham, DuTruGiamDoc, DuTruGiamDocDetail } from '../du-tru-giam-doc.model';
import icInfo from '@iconify/icons-ic/baseline-info';
import { DuTruGiamDocMessage } from 'src/app/shared/configdata/system-message';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-du-tru-giam-doc-shared',
    templateUrl: './du-tru-giam-doc-shared.component.html',
    styleUrls: ['./du-tru-giam-doc-shared.component.scss']
})
export class DuTruGiamDocSharedComponent implements OnInit {
    validationErrors: any;
    id: number;
    documentType: DocumentType;
    gridColumns: any[] = [];
    gridColumnsChoDuyet: any[] = [];
    gridResultColumns: any[] = [];
    gridDataSource: any;
    urlGetDataChuaDuyetGrid = 'TongHopDuTruMuaThuocTaiGiamDoc/GetDataForGridChildChuaDuyetAsync';
    urlGetDataDuyetGrid = 'TongHopDuTruMuaThuocTaiGiamDoc/GetDataForGridChildDuyetAsync';
    urlGetDataGridChild = 'TongHopDuTruMuaThuocTaiGiamDoc/GetDataForGridDuyetDetail';
    khos: any[] = [];
    hdts: any[] = [];
    duTruGiamDoc = {} as DuTruGiamDoc;
    duTruGiamDocDetail = {} as DuTruGiamDocDetail;
    sort: SortDescriptor[] =
        [
            {
                field: 'Id',
                dir: 'asc'
            }
        ];
    icInfo = icInfo;
    groupLoais: GroupDescriptor[] = [{ field: 'Loai', dir: 'asc', aggregates: [] }];
    groups: GroupDescriptor[] = [{
        field: 'Khoa', aggregates: [
            { field: 'SoLuongDuTru', aggregate: 'sum' },
            { field: 'SoLuongDuKienTrongKy', aggregate: 'sum' }
        ]
    }];
    @Output() fireStatus = new EventEmitter<any>();
    @ViewChild('soLuongDuTruHeaderTemplate', { static: true }) soLuongDuTruHeaderTemplate: TemplateRef<any>;
    @ViewChild('soLuongDuTruTemplate', { static: true }) soLuongDuTruTemplate: TemplateRef<any>;
    @ViewChild('soLuongDuKienTemplate', { static: true }) soLuongDuKienTemplate: TemplateRef<any>;
    @ViewChild('soLuongDuKienHeaderTemplate', { static: true }) soLuongDuKienHeaderTemplate: TemplateRef<any>;
    @ViewChild('directorTemplate', { static: true }) directorTemplate: TemplateRef<any>;
    @ViewChild('directorReadonlyTemplate', { static: true }) directorReadonlyTemplate: TemplateRef<any>;
    @ViewChild('khoTongTonTemplate', { static: true }) khoTongTonTemplate: TemplateRef<any>;
    @ViewChild('hdChuaNhapTemplate', { static: true }) hdChuaNhapTemplate: TemplateRef<any>;
    @ViewChild('khoaGroupHeader', { static: true }) khoaGroupHeader: TemplateRef<any>;
    @ViewChild('slDuTruTemplate', { static: true }) slDuTruTemplate: TemplateRef<any>;
    @ViewChild('slDuKienTemplate', { static: true }) slDuKienTemplate: TemplateRef<any>;
    @ViewChild('khoDuTruTonTemplate', { static: true }) khoDuTruTonTemplate: TemplateRef<any>;
    @ViewChild('truongKhoaTemplate', { static: true }) truongKhoaTemplate: TemplateRef<any>;
    @ViewChild('khoaDuocTemplate', { static: true }) khoaDuocTemplate: TemplateRef<any>;
    @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
    constructor(private route: ActivatedRoute, private baseService: BaseService) { }

    ngOnInit() {
        console.log(this.duTruGiamDoc);
        this.id = this.route.snapshot.params.id;
        this.documentType = DocumentType.DanhSachTongHopDuTruMuaDuocPhamTaiGiamDoc;

        this.gridColumnsChoDuyet = [
            { Field: 'Loai', Title: 'Loại', ShowTooltip: true, Width: 67, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: 'DuocPham', Title: 'Dược phẩm', ShowTooltip: true, MinWidth: 96 },
            { Field: 'HoatChat', Title: 'Hoạt chất', ShowTooltip: true, Width: 91 },
            { Field: 'NongDo', Title: 'Nồng độ/ Hàm lượng', ShowTooltip: true, Width: 100 },
            { Field: 'Sdk', Title: 'SĐK', ShowTooltip: true, Width: 50 },
            { Field: 'Dvt', Title: 'ĐVT', ShowTooltip: true, Width: 50 },
            { Field: 'DuongDung', Title: 'ĐD', ShowTooltip: true, Width: 50 },
            { Field: 'NhaSx', Title: 'Nhà SX', ShowTooltip: true, Width: 80 },
            { Field: 'NuocSx', Title: 'Nước SX', ShowTooltip: true, Width: 83 },
            { Field: 'SoLuongDuTru', Title: 'SL Dự trù', Width: 80, Template: this.slDuTruTemplate },
            { Field: 'SoLuongDuKienTrongKy', Title: 'SL D.Kiến S.Dụng Trong Kỳ', Width: 100, Template: this.slDuKienTemplate },
            { Field: 'KhoDuTruTon', Title: 'Kho D.Trù Tồn', Width: 115, Template: this.khoDuTruTonTemplate },
            { Field: 'KhoTongTon', Title: 'Kho Tổng Tồn', Width: 111, Template: this.khoTongTonTemplate },
            { Field: 'HdChuaNhap', Title: 'H.Đồng Chưa Nhập', Width: 112, Template: this.hdChuaNhapTemplate },
            { Field: 'SoLuongDuTruTrKhoa', Title: 'T.Khoa Duyệt', Width: 100, Template: this.truongKhoaTemplate },
            { Field: 'SoLuongDuTruKhDuoc', Title: 'K.Dược Duyệt', Width: 100, Template: this.khoaDuocTemplate },
            { Field: 'SoLuongDuTruDirector', Title: 'G.Đốc Duyệt', Width: 100, Template: this.directorTemplate }
        ];

        this.gridColumns = [
            { Field: 'Loai', Title: 'Loại', ShowTooltip: true, Width: 67, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: 'DuocPham', Title: 'Dược phẩm', ShowTooltip: true, MinWidth: 96 },
            { Field: 'HoatChat', Title: 'Hoạt chất', ShowTooltip: true, Width: 91 },
            { Field: 'NongDo', Title: 'Nồng độ/ Hàm lượng', ShowTooltip: true, Width: 100 },
            { Field: 'Sdk', Title: 'SĐK', ShowTooltip: true, Width: 50 },
            { Field: 'Dvt', Title: 'ĐVT', ShowTooltip: true, Width: 50 },
            { Field: 'DuongDung', Title: 'ĐD', ShowTooltip: true, Width: 50 },
            { Field: 'NhaSx', Title: 'Nhà SX', ShowTooltip: true, Width: 80 },
            { Field: 'NuocSx', Title: 'Nước SX', ShowTooltip: true, Width: 83 },
            { Field: 'SoLuongDuTru', Title: 'SL Dự trù', Width: 80, Template: this.slDuTruTemplate },
            { Field: 'SoLuongDuKienTrongKy', Title: 'SL D.Kiến S.Dụng Trong Kỳ', Width: 100, Template: this.slDuKienTemplate },
            { Field: 'SoLuongDuTruTrKhoa', Title: 'T.Khoa Duyệt', Width: 100, Template: this.truongKhoaTemplate },
            { Field: 'SoLuongDuTruKhDuoc', Title: 'K.Dược Duyệt', Width: 100, Template: this.khoaDuocTemplate },
            { Field: 'SoLuongDuTruDirector', Title: 'G.Đốc Duyệt', Width: 100, Template: this.directorReadonlyTemplate }
        ];

        this.gridResultColumns = [
            {
                Field: 'Khoa',
                Title: '',
                Hidden: true,
                HideFilter: true,
                TemplateGroupHeader: this.khoaGroupHeader
            },
            { Field: 'Nhom', Title: 'Nhóm', Width: 150 },
            { Field: 'Kho', Title: 'Kho', MinWidth: 150, Sortable: false },
            {
                Field: 'SoLuongDuTru', Title: 'SL dự trù', Width: 100, Sortable: false,
                TemplateGroupFooter: this.soLuongDuTruHeaderTemplate, Template: this.soLuongDuTruTemplate
            },
            {
                Field: 'SoLuongDuKienTrongKy', Title: 'SL dự kiến trong kỳ', Width: 175, Sortable: false,
                TemplateGroupFooter: this.soLuongDuKienHeaderTemplate, Template: this.soLuongDuKienTemplate
            },
            { Field: 'NhomDieuTri', Title: 'Nhóm Đ.Trị/ D.Phòng', Width: 150, Sortable: false },
        ];

        if (this.id) {
            this.getById(this.id);
        }
    }

    getById(id: number) {
        this.baseService.getById<DuTruGiamDoc>(id).subscribe(resultData => {
            this.duTruGiamDoc = { ...resultData };
            this.fireStatus.emit(this.duTruGiamDoc.TrangThai);
            console.log(this.duTruGiamDoc);
        });
    }

    TooltipCustom(duTruGiamDocDetail: DuTruGiamDocDetail) {
        this.khos = [...duTruGiamDocDetail.TongTonList];
        this.hdts = [...duTruGiamDocDetail.HdChuaNhapList];
    }

    ReturnData(lyDo = null) {
        const approve = new ApproveData();
        approve.Id = this.id;
        approve.LyDo = lyDo;
        this.duTruGiamDoc.DuTruGiamDocDetails.forEach(item => {
            const approveDetail = new ChiTietDuocPham();
            approveDetail.Id = item.Id;
            approveDetail.SoLuongDuyet = item.SoLuongDuTruDirector;
            approve.ChiTietDuocPhamList.push(approveDetail);
        });

        if (!lyDo) {
            this.validationErrors = [];
            if (this.duTruGiamDoc.TrangThai == null && this.duTruGiamDoc.DuTruGiamDocDetails &&
                this.duTruGiamDoc.DuTruGiamDocDetails
                    .some(e => e.SoLuongDuTruDirector === 0 || e.SoLuongDuTruDirector == null)) {
                for (const validateItem of this.duTruGiamDoc.DuTruGiamDocDetails
                    .filter(e => e.SoLuongDuTruDirector == null)) {
                    const validate = {
                        Field: 'SoLuongDuTruDirector[' + this.duTruGiamDoc.DuTruGiamDocDetails.indexOf(validateItem) + ']',
                        Message: DuTruGiamDocMessage.SoLuongGiamDocNotAllowNull
                    };
                    this.validationErrors.push(validate);
                }
                for (const validateItem of this.duTruGiamDoc.DuTruGiamDocDetails
                    .filter(e => e.SoLuongDuTruDirector === 0)) {
                    const validate = {
                        Field: 'SoLuongDuTruDirector[' + this.duTruGiamDoc.DuTruGiamDocDetails.indexOf(validateItem) + ']',
                        Message: DuTruGiamDocMessage.SoLuongGiamDocNotAllowZero
                    };
                    this.validationErrors.push(validate);
                }
                return 0;
            }
        }

        return approve;
    }

    GetListDuocPham(data: any) {
        this.duTruGiamDoc.DuTruGiamDocDetails = [...data.Data];
    }
}
