import { Component, OnInit, ViewChild, TemplateRef, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApiService } from 'src/app/core/services/api.service';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import {
    DuTruMuaVatTuTaiKhoaChiTietVo,
    DuyetDuTruMuaVatTuViewModel, ThongTinLyDoHuyDuyetTaiKhoa,
    TongHopDuTruMuaVatTuTaiKhoa
} from '../tong-hop-du-tru-mua-vat-tu-tai-khoa.model';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-du-tru-mua-vat-tu-tai-khoa-xem-chi-tiet-shared',
    templateUrl: './du-tru-mua-vat-tu-tai-khoa-xem-chi-tiet-shared.component.html',
    styleUrls: ['./du-tru-mua-vat-tu-tai-khoa-xem-chi-tiet-shared.component.scss']
})

export class TongHopDuTruMuaVatTuTaiKhoaChiTietSharedComponent implements OnInit {
    documentType: DocumentType;
    danhSachTongHopDuTruMuaVatTuTaiKhoa: TongHopDuTruMuaVatTuTaiKhoa;
    duTruMuaVatTuTaiKhoaChiTietVo: DuTruMuaVatTuTaiKhoaChiTietVo[] = [];
    duyetDuTruMuaVatTuViewModel = {} as DuyetDuTruMuaVatTuViewModel;
    thongTinLyDoHuyDuyetTaiKhoa = {} as ThongTinLyDoHuyDuyetTaiKhoa;

    confrim: any;
    popupSavingData: any = null;
    validationErrors: any = null;
    gridColumns: any[] = [];
    sortDuTruChild: SortDescriptor[] =
        [{
            field: 'Id',
            dir: 'asc'
        }];

    urlGetData = "YeuCauMuaVatTu/GetDuTruMuaVatTuChiTietForGridAsyncChild";
    urlGetTotal = "YeuCauMuaVatTu/GetTotalDuTruMuaVatTuChiTietForGridAsyncChild";

    public duTruMuaVatTuId: any = 0;
    @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
    groups: GroupDescriptor[] = [{ field: 'Nhom' }];

    @ViewChild('nhomSLTKDuyet', { static: true }) nhomSLTKDuyet: TemplateRef<any>;
    @Input() trangThaiVo: any;
    @Input() validationErrorsVatTu: any;
    @Input() isCreate: boolean;
    @Output() hideGuibtn: EventEmitter<any> = new EventEmitter<any>();
    constructor(
        private apiService: ApiService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.documentType = DocumentType.DanhSachTongHopDuTruMuaVatTuTaiKhoa;
        this.danhSachTongHopDuTruMuaVatTuTaiKhoa = new TongHopDuTruMuaVatTuTaiKhoa();
        let id = this.route.snapshot.params.id;
        if (id != undefined && id != null) {
            this.getThongTinTongHopDuTruMuaTaiKhoa(id);
        }
        this.duTruMuaVatTuId = id;
        this.gridColumns = [
            // { Field: 'Nhom', Title: 'Loại', Width: 100, ShowTooltip: true },
            { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: 'TenVatTu', Title: 'Tên', Width: 100, ShowTooltip: true },
            { Field: 'DonViTinh', Title: 'ĐVT', Width: 50 },
            { Field: 'QuyCach', Title: 'Quy cách', ShowTooltip: true, Width: 52 },
            { Field: 'HangSanXuat', Title: 'Hãng SX', Width: 100 },
            { Field: 'NuocSanXuat', Title: 'Nước SX', Width: 100 },
            { Field: 'SoLuongDuTru', Title: 'SL Dự Trù', Width: 100 },
            { Field: 'SoLuongDuKienSuDung', Title: 'SL D.KIẾN S.DỤNG TRONG KỲ', Width: 100 },
            { Field: 'SoLuongDuTruTruongKhoaDuyet', Title: 'T.Khoa Duyệt', Width: 100 },
        ];
    }

    getThongTinTongHopDuTruMuaTaiKhoa(id: any) {
        this.apiService.get<any>('YeuCauMuaVatTu/GetThongTinDuTruVatTuTaiKhoa/' + id)
            .subscribe((resultData) => {
                if (resultData !== null && resultData !== undefined) {
                    this.danhSachTongHopDuTruMuaVatTuTaiKhoa = resultData;
                }
            });
    }

    onDataBound(event) {
        if (event && event.Data.length > 0) {
            this.duTruMuaVatTuTaiKhoaChiTietVo = event.Data;
        }
    }

    getSharedData() {
        return this.danhSachTongHopDuTruMuaVatTuTaiKhoa;
    }
}
