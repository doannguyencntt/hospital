import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import {
    TongHopDuTruMuaTaiKhoaDuoc,
    TrangThaiDuyet
} from '../tong-hop-du-tru-mua-vat-tu-tai-khoa-duoc.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-tong-hop-du-tru-mua-vat-tu-tai-khoa-duoc-shared',
    templateUrl: './tong-hop-du-tru-mua-vat-tu-tai-khoa-duoc-shared.component.html',
    styleUrls: ['./tong-hop-du-tru-mua-vat-tu-tai-khoa-duoc-shared.component.scss']
})
export class TongHopDuTruMuaTaiKhoaDuocSharedComponent implements OnInit {
    thongTinDuTruMuaVatTuTaiKhoaDuoc: TongHopDuTruMuaTaiKhoaDuoc;
    documentType: DocumentType;
    gridColumns: any[] = [];
    gridChildColumns: any[] = [];
    gridChildChildColumns: any[] = [];
    validationErrors: any;
    trangThaiDuyet: boolean = null;
    // trường hợp tu chôi,đã duyệt  === true  , cho duyet == false
    isDisableTrangThai = false;
    @Output() trangThaiYeuCau: EventEmitter<TrangThaiDuyet> = new EventEmitter<TrangThaiDuyet>();
    constructor(
        private notificationService: NotificationService,
        private apiService: ApiService,
        private route: ActivatedRoute
    ) { }
    ngOnInit() {
        this.thongTinDuTruMuaVatTuTaiKhoaDuoc = new TongHopDuTruMuaTaiKhoaDuoc();
        const id: number = this.route.snapshot.params.id;
        if (id) {
            this.getById(id);
            this.getTrangThaiDuyet(id);
        }
        this.gridChildColumns = [
            { Field: 'Loai', Title: 'Loại', Width: 120, Sortable: true },
            { Field: 'TenVatTu', Title: 'Vật Tư', Width: 120, Sortable: true },
            { Field: 'DVT', Title: 'DVT', Width: 100, Sortable: true },
            { Field: 'QuyCach', Title: 'Quy Cách', Width: 60, Sortable: false },
            { Field: 'NhaSanXuat', Title: 'Nhà sản xuất', Width: 200, Sortable: true },
            { Field: 'NuocSanXuat', Title: 'Nước sản xuất', Width: 200, Sortable: true },
            { Field: 'SoLuongDuKienSuDungTrong', Title: 'Số lượng dự kiến sử dụng trong', Width: 200, Sortable: true },
            { Field: 'KhoDuTruTon', Title: 'Kho dự trù tồn', Width: 200, Sortable: true },
            { Field: 'KhoTongTon', Title: 'Kho tổng ', Width: 200, Sortable: true },
            { Field: 'HĐChua', Title: 'HĐ chưa', Width: 200, Sortable: true },
            { Field: 'SLDuTruTKhoa', Title: 'SL dự trù T. khoa', Width: 200, Sortable: true },
            { Field: 'SLDuTruKDuocDuyet', Title: 'SL dự trù K. đươc duyệt', minWidth: 200, Sortable: true },
        ];
        this.gridChildChildColumns = [
            { Field: 'LoaiDuTru', Title: 'Loại dự trù', Width: 150, Sortable: true },
            { Field: 'Kho', Title: 'Kho', Width: 150, Sortable: true },
            { Field: 'TuNgay', Title: 'Từ ngày', Width: 150, Sortable: true },
            { Field: 'DenNgay', Title: 'Đên ngày', Width: 150, Sortable: true },
            { Field: 'SLDuTru', Title: 'SL dự trù', Width: 100, Sortable: true },
            { Field: 'SLDuKienTrongKy', Title: 'SL dự kiến trong kỳ', minWidth: 200, Sortable: true },
        ];
    }
    getTrangThaiDuyet(id) {
        this.apiService.post<boolean>('YeuCauLinhVatTu/GetTrangThaiDuyet?IdYeuCauLinh=' + id).subscribe(
            resultData => {
                this.trangThaiDuyet = resultData;
                if (this.trangThaiDuyet === true) {
                    this.trangThaiYeuCau.emit(new TrangThaiDuyet('Đã duyệt', resultData));
                } else if (this.trangThaiDuyet === false) {
                    this.trangThaiYeuCau.emit(new TrangThaiDuyet('Từ chối duyệt', resultData));
                } else {
                    this.trangThaiYeuCau.emit(new TrangThaiDuyet('Đang chờ duyệt', resultData));
                }
            },
            (err: ApiError) => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message !== 'Validation Failed') {
                    this.notificationService.showError(err.Message);
                }
            });
    }
    getById(id) {
        this.apiService.get<TongHopDuTruMuaTaiKhoaDuoc>('YeuCauMuaVatTu/GetThongTinMuaVatTuTaiKho?id=' + id)
            .subscribe((resultData) => {
                if (resultData) { }
            });
    }
}
