import { Component, OnInit, Input, ViewChild, TemplateRef, ChangeDetectorRef, ViewRef } from '@angular/core';
import { YeuCauTraThuoc, YeuCauTraThuocChiTiet } from '../yeu-cau-tra-thuoc.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/sharp-edit';
import icSearch from '@iconify/icons-ic/twotone-search';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icRight from '@iconify/icons-ic/chevron-right';
import icRightLast from '@iconify/icons-ic/last-page';
import icLeft from '@iconify/icons-ic/chevron-left';
import icLeftLast from '@iconify/icons-ic/first-page';
import { AuthService } from 'src/app/core/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IntlService } from '@progress/kendo-angular-intl';
import { BaseService } from 'src/app/core/services/base.service';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-yeu-cau-tra-thuoc-other-shared',
    templateUrl: './yeu-cau-tra-thuoc-other-shared.component.html',
    styleUrls: ['./yeu-cau-tra-thuoc-other-shared.component.scss']
})

export class YeuCauTraThuocOtherSharedComponent implements OnInit {
    @Input() isUpdate = false;
    @Input() tuChoiDuyet: boolean = null;
    @Input() chuaDuyet: boolean = null;
    sort: SortDescriptor[] =
        [
            {
                field: 'Id',
                dir: 'asc'
            }
        ];
    yeuCauTraThuoc: YeuCauTraThuoc;
    yeuCauTraThuocChiTiet: YeuCauTraThuocChiTiet;

    icMoreHoriz = icMoreHoriz;
    icEdit = icEdit;
    icDelete = icDelete;

    icRight = icRight;
    icLeft = icLeft;
    icRightLast = icRightLast;
    icLeftLast = icLeftLast;

    documentType: DocumentType;
    id: number;

    urlGetData = 'YeuCauTraThuoc/GetAllDuocPhamData';
    urlGetTotal = 'YeuCauTraThuoc/GetAllDuocPhamTotal';


    yeuCauTraThuocSource = new YeuCauTraThuoc();
    yeuCauTraThuocChiTietSource = new YeuCauTraThuocChiTiet();

    listIdUpdate: number[] = [];
    dataSourceCache: any;
    validationErrors: any;
    gridColumns: any[] = [];
    gridDataSource: any;

    yeuCauTraThuocSearch: YeuCauTraThuoc;
    yeuCauTraThuocChiTietSearch: YeuCauTraThuocChiTiet;

    format = 'n0';
    formatpercen = '#.00 \\%';

    icSearch = icSearch;

    giaNhapInDB: number = null;

    searchString = '';
    urlGetDataGridChild = 'YeuCauTraThuoc/GetDataForGridChildAsync';
    urlGetTotalPageGridChild = 'YeuCauTraThuoc/GetTotalPageForGridChildAsync';

    groups: GroupDescriptor[] = [{ field: 'Nhom' }];


    @ViewChild('giaTemplate', { static: true }) giaTemplate: TemplateRef<any>;
    @ViewChild('grid', { static: false }) grid: GridComponent;
    @ViewChild('soLuongTemplate', { static: true }) soLuongTemplate: TemplateRef<any>;
    @ViewChild('tenNhomGroupHeaderTemplate', { static: true }) tenNhomGroupHeaderTemplate: TemplateRef<any>;

    constructor(
        public intl: IntlService,
        private route: ActivatedRoute,
        private baseService: BaseService,
        private authService: AuthService,
        private cdRef: ChangeDetectorRef,
        private router: Router
    ) { }

    ngOnInit() {
        this.documentType = DocumentType.YeuCauHoanTraDuocPham;
        this.id = this.route.snapshot.params.id;

        this.yeuCauTraThuoc = new YeuCauTraThuoc();
        this.yeuCauTraThuocChiTiet = new YeuCauTraThuocChiTiet();

        this.yeuCauTraThuocSource = new YeuCauTraThuoc();
        this.yeuCauTraThuocChiTietSource = new YeuCauTraThuocChiTiet();

        const YeuCauTraThuocChiTietDataSource = new YeuCauTraThuocChiTiet();
        this.yeuCauTraThuocSource.YeuCauTraDuocPhamChiTiets.push(YeuCauTraThuocChiTietDataSource);
        this.yeuCauTraThuocSource.YeuCauTraDuocPhamChiTiets.splice(0, 1);

        this.gridColumns = [
            {
                Field: 'Nhom',
                Title: 'Tên Nhóm',
                Sortable: false,
                Hidden: true,
                HideFilter: true,
                TemplateGroupHeader: this.tenNhomGroupHeaderTemplate
            },
            { Field: 'DuocPham', Title: 'Dược Phẩm', Width: 150, Sortable: false },
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

        this.setDataGridView(this.yeuCauTraThuocSource.YeuCauTraDuocPhamChiTiets);

        if (this.id !== undefined && this.id !== null) {
            this.getById(this.id);
        } else {
            this.setNhanVienId();
        }

        this.yeuCauTraThuocSearch = new YeuCauTraThuoc();
        this.yeuCauTraThuocChiTietSearch = new YeuCauTraThuocChiTiet();

    }

    getById(id: number) {
        this.baseService.getById<YeuCauTraThuoc>(id).subscribe(resultData => {
            if (resultData != null) {
                this.isCheckUrl(resultData.DuocDuyet);
                this.yeuCauTraThuoc = resultData;
            }
        });

        const self = this;

        self.grid._isLoading = true;
    }

    isCheckUrl(duocDuyet: boolean) {
        const currentUrl = window.location.href;
        if (duocDuyet == null) {
            if (currentUrl.indexOf('/nhap-xuat/duoc-pham/yeu-cau-tra-duoc-pham/chinh-sua/') === -1) {
                this.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-tra-duoc-pham/chinh-sua/' + this.id]);
            }
        } else if (duocDuyet === false) {
            if (currentUrl.indexOf('/nhap-xuat/duoc-pham/yeu-cau-tra-duoc-pham/tu-choi-duyet/') === -1) {
                this.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-tra-duoc-pham/tu-choi-duyet/' + this.id]);
            }
        } else {
            if (currentUrl.indexOf('/nhap-xuat/duoc-pham/yeu-cau-tra-duoc-pham/da-duyet/') === -1) {
                this.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-tra-duoc-pham/da-duyet/' + this.id]);
            }
        }
    }

    Huy() {
        this.validationErrors = [];
        this.ClearData();
    }

    ClearData() {
        this.isUpdate = false;
        const laDuocPhamBHYT: boolean = JSON.parse(JSON.stringify(this.yeuCauTraThuocChiTiet.LaDuocPhamBHYT));
        const HopDongThauId: number = JSON.parse(JSON.stringify(this.yeuCauTraThuocChiTiet.HopDongThauDuocPhamId));


        this.yeuCauTraThuocChiTiet = new YeuCauTraThuocChiTiet();
        this.yeuCauTraThuocChiTiet.LaDuocPhamBHYT = laDuocPhamBHYT;
        this.yeuCauTraThuocChiTiet.HopDongThauDuocPhamId = HopDongThauId;
    }

    getSharedData() {
        this.yeuCauTraThuoc.YeuCauTraDuocPhamChiTiets = this.yeuCauTraThuocSource.YeuCauTraDuocPhamChiTiets;
        return this.yeuCauTraThuoc;
    }

    setNhanVienId() {
        const user = this.authService.getAccessUser();
        this.yeuCauTraThuoc.NhanVienDuyetId = user.Id;
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
