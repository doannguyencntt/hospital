import { Component, OnInit, Input, ViewChild, TemplateRef, ChangeDetectorRef, ViewRef } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/sharp-edit';
import icSearch from '@iconify/icons-ic/twotone-search';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import { AuthService } from 'src/app/core/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IntlService } from '@progress/kendo-angular-intl';
import { ApiService } from 'src/app/core/services/api.service';
import { BaseService } from 'src/app/core/services/base.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { LoaiDuocPhamVatTu, YeuCauTraKSNK, YeuCauTraKSNKChiTiet } from '../yeu-cau-tra-ksnk.model';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-yeu-cau-tra-ksnk-other-shared',
    templateUrl: './yeu-cau-tra-ksnk-other-shared.component.html',
    styleUrls: ['./yeu-cau-tra-ksnk-other-shared.component.scss']
})

export class YeuCauTraKSNKOtherSharedComponent implements OnInit {
    @Input() isUpdate = false;
    @Input() tuChoiDuyet: boolean = null;
    @Input() chuaDuyet: boolean = null;
    loaiDuocPhamVatTu: number;
    loaiDuocPham = LoaiDuocPhamVatTu.LoaiDuocPham;
    loaiVatTu = LoaiDuocPhamVatTu.LoaiDuocPham;

    sort: SortDescriptor[] =
        [
            {
                field: 'Id',
                dir: 'asc'
            }
        ];
    yeuCauTraVatTu: YeuCauTraKSNK;
    yeuCauTraVatTuChiTiet: YeuCauTraKSNKChiTiet;

    yeuCauTraVatTuSource = new YeuCauTraKSNK();
    yeuCauTraVatTuChiTietSource = new YeuCauTraKSNKChiTiet();

    listIdUpdate: number[] = [];
    dataSourceCache: any;
    validationErrors: any;
    gridColumns: any[] = [];
    gridDataSource: any;

    yeuCauTraVatTuSearch: YeuCauTraKSNK;
    yeuCauTraVatTuChiTietSearch: YeuCauTraKSNKChiTiet;

    format = 'n0';
    formatpercen = '#.00 \\%';

    icSearch = icSearch;
    icDelete = icDelete;
    icEdit = icEdit;
    icMoreHoriz = icMoreHoriz;

    giaNhapInDB: number = null;

    searchString = '';
    documentType: DocumentType;

    urlGetDataGridVatTuChild = 'YeuCauTraKSNK/GetDataForGridChildAsync';
    urlGetTotalPageGridVatTuChild = 'YeuCauTraKSNK/GetTotalPageForGridChildAsync';

    urlGetDataGridDuocPhamChild = 'YeuCauTraThuoc/GetDataForGridChildAsync';
    urlGetTotalPageGridDuocPhamChild = 'YeuCauTraThuoc/GetTotalPageForGridChildAsync';
   
    groups: GroupDescriptor[] = [{ field: 'Nhom' }];
    id: number;

    @ViewChild('giaTemplate', { static: true }) giaTemplate: TemplateRef<any>;
    @ViewChild('grid', { static: false }) grid: GridComponent;
    @ViewChild('soLuongTemplate', { static: true }) soLuongTemplate: TemplateRef<any>;
    @ViewChild('tenNhomGroupHeaderTemplate', { static: true }) tenNhomGroupHeaderTemplate: TemplateRef<any>;

    constructor(
        public intl: IntlService,
        private route: ActivatedRoute,
        private baseService: BaseService,
        private apiService: ApiService, private notificationService: NotificationService,
        private authService: AuthService,
        private cdRef: ChangeDetectorRef,
        private router: Router
    ) { }

    ngOnInit() {
        this.documentType = DocumentType.YeuCauHoanTraKSNK;
        this.id = this.route.snapshot.params.id;
        this.loaiDuocPhamVatTu = Number(this.route.snapshot.params.loaiduocphamvattu);

        this.yeuCauTraVatTu = new YeuCauTraKSNK();
        this.yeuCauTraVatTuChiTiet = new YeuCauTraKSNKChiTiet();

        this.yeuCauTraVatTuSource = new YeuCauTraKSNK();
        this.yeuCauTraVatTuChiTietSource = new YeuCauTraKSNKChiTiet();

        const YeuCauTraVatTuChiTietDataSource = new YeuCauTraKSNKChiTiet();
        this.yeuCauTraVatTuSource.YeuCauTraKSNKChiTiets.push(YeuCauTraVatTuChiTietDataSource);
        this.yeuCauTraVatTuSource.YeuCauTraKSNKChiTiets.splice(0, 1);

        this.gridColumns = [
            {
                Field: 'Nhom',
                Title: 'Tên Nhóm',
                Sortable: false,
                Hidden: true,
                HideFilter: true,
                TemplateGroupHeader: this.tenNhomGroupHeaderTemplate
            },
            { Field: 'VatTu', Title: 'Tên', Width: 150, Sortable: false },
            { Field: 'HopDong', Title: 'HĐ Thầu', MinWidth: 150, Sortable: false },
            { Field: 'Loai', Title: 'Loại', Width: 120, Sortable: false },
            { Field: 'SoLo', Title: 'Số Lô', Width: 100, Sortable: false },
            { Field: 'HsdText', Title: 'Hạn Sử Dụng', Width: 140, Sortable: false },
            { Field: 'MaVach', Title: 'Mã Vạch', Width: 120, Sortable: false },
            { Field: 'SoLuongTra', Title: 'SL Trả', Width: 100, Sortable: false, Template: this.soLuongTemplate },
            { Field: 'DonGiaNhap', Title: 'Đơn Giá Nhập', Width: 120, Sortable: false, Template: this.giaTemplate },
            { Field: 'Vat', Title: 'VAT(%)', Width: 100, Sortable: false },
            { Field: 'TiLeThapGia', Title: 'TL Tháp Giá(%)', Width: 140, Sortable: false },
        ];

        this.setDataGridView(this.yeuCauTraVatTuSource.YeuCauTraKSNKChiTiets);

        if (this.id !== undefined && this.id !== null) {
            this.getById(this.id);
        } else {
            this.setNhanVienId();
        }

        this.yeuCauTraVatTuSearch = new YeuCauTraKSNK();
        this.yeuCauTraVatTuChiTietSearch = new YeuCauTraKSNKChiTiet();

    }

    getById(id: number) {
        const self = this;
        if (this.loaiDuocPhamVatTu === LoaiDuocPhamVatTu.LoaiVatTu) {
            self.baseService.getById<YeuCauTraKSNK>(id).subscribe(resultData => {
                if (resultData != null) {
                    self.isCheckUrl(resultData.DuocDuyet);
                    self.yeuCauTraVatTu = resultData;
                }
            });
            self.grid._isLoading = true;
        }
        else if (this.loaiDuocPhamVatTu === LoaiDuocPhamVatTu.LoaiDuocPham) {

        }
    }

    isCheckUrl(duocDuyet: boolean) {
        const currentUrl = window.location.href;
        if (duocDuyet == null) {
            if (currentUrl.indexOf('/nhap-xuat/ksnk/yeu-cau-tra-ksnk/chinh-sua/') === -1) {
                this.router.navigate(['/nhap-xuat/ksnk/yeu-cau-tra-ksnk/chinh-sua/' + this.id + "/" + this.loaiDuocPhamVatTu]);
            }
        } else if (duocDuyet === false) {
            if (currentUrl.indexOf('/nhap-xuat/ksnk/yeu-cau-tra-ksnk/tu-choi-duyet/') === -1) {
                this.router.navigate(['/nhap-xuat/ksnk/yeu-cau-tra-ksnk/tu-choi-duyet/' + this.id + "/" + this.loaiDuocPhamVatTu]);
            }
        } else {
            if (currentUrl.indexOf('/nhap-xuat/ksnk/yeu-cau-tra-ksnk/da-duyet/') === -1) {
                this.router.navigate(['/nhap-xuat/ksnk/yeu-cau-tra-ksnk/da-duyet/' + this.id + "/" + this.loaiDuocPhamVatTu]);
            }
        }
    }

    Huy() {
        this.validationErrors = [];
        this.ClearData();
    }

    ClearData() {
        this.isUpdate = false;
        const laVatTuBHYT: boolean = JSON.parse(JSON.stringify(this.yeuCauTraVatTuChiTiet.LaVatTuBHYT));
        const HopDongThauId: number = JSON.parse(JSON.stringify(this.yeuCauTraVatTuChiTiet.HopDongThauVatTuId));


        this.yeuCauTraVatTuChiTiet = new YeuCauTraKSNKChiTiet();
        this.yeuCauTraVatTuChiTiet.LaVatTuBHYT = laVatTuBHYT;
        this.yeuCauTraVatTuChiTiet.HopDongThauVatTuId = HopDongThauId;
    }

    getSharedData() {
        this.yeuCauTraVatTu.YeuCauTraKSNKChiTiets = this.yeuCauTraVatTuSource.YeuCauTraKSNKChiTiets;
        return this.yeuCauTraVatTu;
    }

    setNhanVienId() {
        const user = this.authService.getAccessUser();
        this.yeuCauTraVatTu.NhanVienDuyetId = user.Id;
    }

    setDataGridView(dataSource: any) {
        this.gridDataSource = null;
        this.dataSourceCache = dataSource;
        this.gridDataSource = {
            data: this.dataSourceCache,
            total: this.dataSourceCache.length
        };

        if (!(this.cdRef as ViewRef).destroyed) {
            this.cdRef.detectChanges();
        }

        if (this.grid != null) {
            this.grid.setDataSource();
        }
    }
}
