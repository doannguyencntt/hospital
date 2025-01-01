import { ChangeDetectorRef, Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { BaseService } from 'src/app/core/services/base.service';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/sharp-edit';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { GoiDv, SystemMessage } from 'src/app/shared/configdata/system-message';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DvTrongGoi, GoiDichVu, LoaiGiaGiuongBenhVien } from '../nhom-dich-vu-thuong-dung';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
    selector: 'app-nhom-dich-vu-thuong-dung-shared',
    templateUrl: './nhom-dich-vu-thuong-dung-shared.component.html',
    styleUrls: ['./nhom-dich-vu-thuong-dung-shared.component.scss']
})
export class NhomDichVuThuongDungSharedComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private apiService: ApiService,
        private authService: AuthService,
        private baseService: BaseService,
        private dialog: MatDialog,
        private cdRef: ChangeDetectorRef,
        private notificationService: NotificationService
    ) { this.baseService.controllerName = "NhomDichVuThuongDung"; }

    listDVG: any[] = [];
    loaiGiaKhamBenhDisabled = false;
    @Input() isCreate = false;
    @Input() boPhan = null;
    @Input() disableBoPhan = false;
    
    @ViewChild(GridComponent, { static: false }) gridChild: GridComponent;
    @ViewChild('trangThaiChiTietDichVuGiuongTemplate', { static: true }) trangThaiChiTietDichVuGiuongTemplate: TemplateRef<any>;
    @ViewChild('tongCongFooterGiuongTemplate', { static: true }) tongCongFooterGiuongTemplate: TemplateRef<any>;
    @ViewChild('thanhTienFooterGiuongTemplate', { static: true }) thanhTienFooterGiuongTemplate: TemplateRef<any>;
    @ViewChild('gridDvTrongGoi', { static: false }) gridDvTrongGoi: GridComponent;
    @ViewChild('thanhTienFooterTemplate', { static: true }) thanhTienFooterTemplate: TemplateRef<any>;

    //#endregion

    //#region khai báo những cái liên quan của gói dịch vụ khám bệnh
    idDichVuKhamBenhComponent: number;
    isUpdateKhamBenh = false;
    tongGoiKhamBenh = 0;
    listDVKB: any[] = [];
    //#endregion

    //#region khai báo những cái liên quan đến chi tiết dược phẩm
    gridColumnsChiTietDuocPham: any[] = [];
    dataSourceCacheDichVuChiTietDuocPham: any;
    idDichVuChiTietDuocPhamComponent: number;
    listDP: any[] = [];
    @ViewChild('thanhTienFooterDuocPhamTemplate', { static: true }) thanhTienFooterDuocPhamTemplate: TemplateRef<any>;
    //#endregion

    documentType: DocumentType;
    validationErrors: any;
    icDelete = icDelete;
    icEdit = icEdit;
    icMoreHoriz = icMoreHoriz;
    luaChonGoiDichVu = 1;
    gridColumns: any[] = [];


    gridDataSource: any = {
        data: [],
        total: 0
    };
    id: number = this.route.snapshot.params.id;
    goiDichVu = new GoiDichVu();
    dvTrongGois = new DvTrongGoi();
    danhSachLoaiGia: LoaiGiaGiuongBenhVien; // loại giá 3 loai : giuong, kham benh, ky thuat
    @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
    @ViewChild('tenDichVuGroupFooterTemplate', { static: true }) tenDichVuGroupFooterTemplate: TemplateRef<any>;
    @ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;
    @ViewChild('loaiGiaTemplate', { static: true }) loaiGiaTemplate: TemplateRef<any>;
    @ViewChild('donGiaFooterTemplate', { static: true }) donGiaFooterTemplate: TemplateRef<any>;
    @ViewChild('tenDichVuKhongChietKhauFooterTemplate', { static: true }) tenDichVuKhongChietKhauFooterTemplate: TemplateRef<any>;
    @ViewChild('donGiaGroupFooterTemplate', { static: true }) donGiaGroupFooterTemplate: TemplateRef<any>;
    @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;
    @ViewChild('ghiChuTemplate', { static: true }) ghiChuTemplate: TemplateRef<any>;
    @ViewChild('thanhTienGroupFooterTemplate', { static: true }) thanhTienGroupFooterTemplate: TemplateRef<any>;
    @ViewChild('dichVuFooterTemplate', { static: true }) dichVuFooterTemplate: TemplateRef<any>;
    @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
    @ViewChild('soLuongTemplate', { static: true }) soLuongTemplate: TemplateRef<any>;
    @ViewChild('gridCoChietKhau', { static: false }) gridCoChietKhau: GridComponent;
    @ViewChild('gridKhongChietKhau', { static: false }) gridKhongChietKhau: GridComponent;
    @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
    //#endregion

    //#region khai báo không chiết khấu
    groups: GroupDescriptor[] = [
        {
            field: 'NhomDisplay', aggregates: [
                { field: 'DonGia', aggregate: 'sum' },
                { field: 'ThanhTien', aggregate: 'sum' }
            ]
        }
    ];

    public totalNotChietKhau(field: any) {
        switch (field) {
            case 'ThanhTien': {

            }
        }
    }

    ngOnInit() {
        this.documentType = DocumentType.GoiDichVuNhomThuongDung;
        const id: number = this.route.snapshot.params.id;
       
        if (this.boPhan != undefined && this.boPhan != null) {
            this.goiDichVu.BoPhanId = this.boPhan;
        }

        this.gridColumns = [
            { Field: 'STT', Title: '#', Width: 35, Template: this.sttTemplate },
            { Field: 'MaDv', Title: 'Mã', Width: 120 },
            {
                Field: 'NhomDisplay', Title: 'Nhóm', Width: 200, Hidden: true,
                TemplateGroupHeader: this.nhomGroupHeaderTemplate
            },
            {
                Field: 'TenDv', Title: 'Tên Dịch Vụ', MinWidth: 200,
                TemplateGroupFooter: this.tenDichVuGroupFooterTemplate
            },
            { Field: 'LoaiGiaDisplay', Title: 'Loại Giá', Width: 120, Template: this.loaiGiaTemplate },
            { Field: 'SoLuong', Title: 'Số Lượng', Width: 120, Template: this.soLuongTemplate },
            {
                Field: 'DonGia', Title: 'Đơn Giá', Width: 120,
                Template: this.donGiaTemplate, TemplateFooter: this.donGiaFooterTemplate
            },
            {
                Field: 'ThanhTien', Title: 'Thành Tiền', Width: 120,
                Template: this.thanhTienTemplate, TemplateFooter: this.thanhTienFooterTemplate
            },
            {
                Field: 'GhiChu', Title: 'Ghi Chú', Width: 474,
                Template: this.ghiChuTemplate
            },
            { Field: 'Action', Title: '', Width: 66, Template: this.trangThaiTemplate }
        ];

        this.getLoaiGiaDefault();

        if (id) {
            this.getById(id);
        }
    }

    onChangeBoPhan(dataItem: any) {
        if (dataItem != undefined && dataItem != null) {
            this.goiDichVu.BoPhanId = dataItem.KeyId;
        } else {
            this.goiDichVu.BoPhanId = null;
        }
    }

    //#region triển khai những pt common
    getById(id: number) {
        this.baseService.getById<GoiDichVu>(id).subscribe(resultData => {
            if (resultData) {
                if (this.isCreate) {
                    this.goiDichVu = { ...resultData };
                    this.goiDichVu.Id = 0;
                    this.goiDichVu.DvTrongGois.forEach(x => {
                        x.IdDatabase = 0;
                        x.GoiDichVuId = 0;
                    });
                    this.setDataGridView();
                    this.gridDvTrongGoi.gridDataSource = { ...this.gridDataSource };
                    this.gridDvTrongGoi.setDataSource();
                    return;
                }
                this.goiDichVu = { ...resultData };
                this.setDataGridView();
                this.gridDvTrongGoi.gridDataSource = { ...this.gridDataSource };
                this.gridDvTrongGoi.setDataSource();
            }
        });
    }

    public totalDV(field: any) {
        switch (field) {
            case 'ThanhTien': {
                return this.goiDichVu.DvTrongGois.reduce((sum, item) => sum + item.ThanhTien, 0);
            }
        }
    }

    getLoaiGiaDefault() {
        const defaultParams = {
            Id: 0,
            ParameterDependencies: null,
            Query: null,
            Take: 50
        };
        this.apiService.post('KhamBenh/LoaiGia', defaultParams).subscribe(
            (resultData: any) => {
                this.dvTrongGois.LoaiGiaDisplay = resultData != null ? resultData[0].DisplayName : null;
            });
    }

    ChangeSoLuongDataItem(soLuong: number, data: DvTrongGoi) {
        data.SoLuong = soLuong;
        data.ThanhTien = data.DonGia != null ?
            data.DonGia * soLuong : null;
    }

    getSharedData() {
        if (this.isCreate) {
            this.goiDichVu.Id = 0;
        } else {
            this.goiDichVu.Id = this.id ? this.id : 0;
        }
        return this.goiDichVu;
    }

    chonDichVu(evt: any) {
        if (evt == 3 || evt == 2 || evt == 1) {
            this.danhSachLoaiGia = null;
            this.dvTrongGois.LoaiGia = null;
        }
        this.validationErrors = [];
        this.Reset();
    }

    onChangeDichVu(data: any) {
        this.validationErrors = [];
        if (data) {
            this.dvTrongGois.TenDv = data.DisplayName;
            this.dvTrongGois.DvId = data.KeyId;
            this.dvTrongGois.MaDv = data.Ma;
            switch (this.luaChonGoiDichVu) {
                case 1: {
                    this.dvTrongGois.SoLuong = 1;
                    this.danhSachLoaiGia = null;
                    this.dvTrongGois.LoaiGia = null;
                    // this.apiService.post('GoiDichVu/GetChiPhiHienTaiDichVuKhamBenh?dichVuKhamBenhBenhVienId=' + this.dvTrongGois.DvId +
                    //     '&nhomGiaDichVuKhamBenhBenhVienId=' + this.dvTrongGois.LoaiGia).subscribe(
                    //         (resultData: any) => {
                    //             this.dvTrongGois.DonGia = resultData;
                    //             this.dvTrongGois.ThanhTien = this.dvTrongGois.SoLuong != null ?
                    //                 resultData * this.dvTrongGois.SoLuong : resultData;
                    //         });
                    this.apiService.post('GoiDichVu/LoaiGiaDichVuKhamBenh?idDichVuKhamBenhId=' + this.dvTrongGois.DvId).subscribe(
                        (resultData: any) => {
                            this.danhSachLoaiGia = resultData;
                            if (this.danhSachLoaiGia != undefined && this.danhSachLoaiGia != null
                                && this.danhSachLoaiGia[0] != undefined && this.danhSachLoaiGia[0] != null) {
                                //Khách hàng yêu cầu mạc đinh load giá thường.
                                this.onChangeLoaiGia(this.danhSachLoaiGia[0]);
                            }
                        });
                    break;
                }
                case 2: {
                    this.danhSachLoaiGia = null;
                    this.dvTrongGois.LoaiGia = null;
                    this.apiService.post('GoiDichVu/LoaiGiaNhomGiaDichVuKyThuatBenhVien?dichVuKyThuatId=' + this.dvTrongGois.DvId).subscribe(
                        (resultData: any) => {
                            if (resultData != undefined && resultData != null) {
                                this.danhSachLoaiGia = resultData;
                                if (this.danhSachLoaiGia != undefined && this.danhSachLoaiGia != null
                                    && this.danhSachLoaiGia[0] != undefined && this.danhSachLoaiGia[0] != null) {
                                    //Khách hàng yêu cầu mạc đinh load giá thường.
                                    this.onChangeLoaiGia(this.danhSachLoaiGia[0]);
                                }
                                else {
                                    this.notificationService.showError("Giá dịch vụ này hết hạn.");
                                }
                            }
                            else {

                            }
                        });
                    // this.dvTrongGois.SoLuong = null;
                    // this.apiService.post('GoiDichVu/GetChiPhiHienTaiDichVuKyThuat?dichVuKyThuatBenhVienId=' + this.dvTrongGois.DvId +
                    //     '&nhomGiaDichVuKyThuatBenhVienId=' + this.dvTrongGois.LoaiGia).subscribe(
                    //         (resultData: any) => {
                    //             this.dvTrongGois.DonGia = resultData;
                    //             this.dvTrongGois.ThanhTien = this.dvTrongGois.SoLuong != null ?
                    //                 resultData * this.dvTrongGois.SoLuong : resultData;
                    //         });
                    break;
                }
                case 3: {
                    this.danhSachLoaiGia = null;
                    this.dvTrongGois.LoaiGia = null;
                    this.apiService.post('GoiDichVu/LoaiGiaNhomGiaGiuongBenhVien?dichVuGiuongBenhVienId=' + this.dvTrongGois.DvId).subscribe(
                        (resultData: any) => {
                            this.danhSachLoaiGia = resultData;
                            if (this.danhSachLoaiGia != undefined && this.danhSachLoaiGia != null
                                && this.danhSachLoaiGia[0] != undefined && this.danhSachLoaiGia[0] != null) {
                                //Khách hàng yêu cầu mạc đinh load giá thường.
                                this.onChangeLoaiGia(this.danhSachLoaiGia[0]);
                            }
                        });
                    // this.apiService.post('GoiDichVu/GetChiPhiHienTaiDichVuKyThuat?dichVuKyThuatBenhVienId=' + this.dvTrongGois.DvId +
                    //     '&nhomGiaDichVuKyThuatBenhVienId=' + this.dvTrongGois.LoaiGia).subscribe(
                    //         (resultData: any) => {
                    //             this.dvTrongGois.DonGia = resultData;
                    //             this.dvTrongGois.ThanhTien = this.dvTrongGois.SoLuong != null ?
                    //                 resultData * this.dvTrongGois.SoLuong : resultData;
                    //         });
                    break;
                }
            }
            return;
        }
        else {
            this.danhSachLoaiGia = null;
            this.dvTrongGois.LoaiGia = null;
        }
        this.dvTrongGois.DonGia = null;
        this.dvTrongGois.ThanhTien = null;
    }

    ChangeSoLuong(soluong: number) {
        this.dvTrongGois.SoLuong = soluong;
        this.dvTrongGois.ThanhTien = this.dvTrongGois.DonGia != null ?
            this.dvTrongGois.DonGia * soluong : null;
    }

    onChangeLoaiGia(loaiGia: any) {
        this.dvTrongGois.LoaiGia = loaiGia.KeyId;
        this.dvTrongGois.LoaiGiaDisplay = loaiGia.DisplayName;
        if (this.validationErrors && this.validationErrors.some(x => x.Field.includes('DonGia'))) {
            for (const validationItem of this.validationErrors.filter(x => x.Field.includes('DonGia'))) {
                this.validationErrors.splice(this.validationErrors.indexOf(validationItem), 1);
            }
        }
        if (this.dvTrongGois.DvId) {
            switch (this.luaChonGoiDichVu) {
                case 1: {
                    this.apiService.post('GoiDichVu/GetChiPhiHienTaiDichVuKhamBenh?dichVuKhamBenhBenhVienId=' + this.dvTrongGois.DvId +
                        '&nhomGiaDichVuKhamBenhBenhVienId=' + this.dvTrongGois.LoaiGia).subscribe(
                            (resultData: any) => {
                                this.dvTrongGois.DonGia = resultData;
                                this.dvTrongGois.ThanhTien = this.dvTrongGois.SoLuong != null ?
                                    resultData * this.dvTrongGois.SoLuong : resultData;
                            });
                    break;
                }
                case 2: {
                    this.apiService.post('GoiDichVu/GetChiPhiHienTaiDichVuKyThuat?dichVuKyThuatBenhVienId=' + this.dvTrongGois.DvId +
                        '&nhomGiaDichVuKyThuatBenhVienId=' + this.dvTrongGois.LoaiGia).subscribe(
                            (resultData: any) => {
                                this.dvTrongGois.DonGia = resultData;
                                //BVHD-3801 khách hàng chọn dịch vụ kỹ thuật số lượng 1
                                if(this.dvTrongGois.SoLuong === null) this.dvTrongGois.SoLuong = 1;
                                this.dvTrongGois.ThanhTien = this.dvTrongGois.SoLuong != null ?
                                    resultData * this.dvTrongGois.SoLuong : resultData;
                            });
                    break;
                }
                case 3: {
                    this.apiService.post('GoiDichVu/GetChiPhiChoDichVuGiuong?dichVuGiuongBenhVienId=' + this.dvTrongGois.DvId +
                        '&nhomGiaId=' + this.dvTrongGois.LoaiGia).subscribe(
                            (resultData: any) => {
                                this.dvTrongGois.DonGia = resultData;
                                this.dvTrongGois.ThanhTien = this.dvTrongGois.SoLuong != null ?
                                    resultData * this.dvTrongGois.SoLuong : resultData;
                            });
                    break;
                }
            }
            return;
        }
        this.dvTrongGois.DonGia = null;
        this.dvTrongGois.ThanhTien = null;
    }

    onChangeLoaiGiaTheoDataItem(loaiGia: any, data: DvTrongGoi) {
        data.LoaiGia = loaiGia.KeyId;
        data.LoaiGiaDisplay = loaiGia.DisplayName;

        if (this.validationErrors &&
            this.validationErrors
                .some(x => x.Field.includes('dataItem[' + this.goiDichVu.DvTrongGois.indexOf(data) + '].DonGia'))) {
            for (const validateItem of this.validationErrors.filter
                (x => x.Field.includes('dataItem[' + this.goiDichVu.DvTrongGois.indexOf(data) + '].DonGia'))) {
                this.validationErrors.splice(this.validationErrors.indexOf(validateItem), 1);
            }
        }


        if (data.DvId) {
            switch (data.Nhom) {
                case 1: {
                    this.apiService.post('GoiDichVu/GetChiPhiHienTaiDichVuKhamBenh?dichVuKhamBenhBenhVienId=' + data.DvId +
                        '&nhomGiaDichVuKhamBenhBenhVienId=' + data.LoaiGia).subscribe(
                            (resultData: any) => {
                                data.DonGia = resultData;
                                data.ThanhTien = data.SoLuong != null ?
                                    resultData * data.SoLuong : resultData;
                            });
                    break;
                }
                case 2: {
                    this.apiService.post('GoiDichVu/GetChiPhiHienTaiDichVuKyThuat?dichVuKyThuatBenhVienId=' + data.DvId +
                        '&nhomGiaDichVuKyThuatBenhVienId=' + data.LoaiGia).subscribe(
                            (resultData: any) => {
                                data.DonGia = resultData;
                                data.ThanhTien = data.SoLuong != null ?
                                    resultData * data.SoLuong : resultData;
                            });
                    break;
                }
                case 3: {
                    this.apiService.post('GoiDichVu/GetChiPhiChoDichVuGiuong?dichVuGiuongBenhVienId=' + data.DvId +
                        '&nhomGiaId=' + data.LoaiGia).subscribe(
                            (resultData: any) => {
                                data.DonGia = resultData;
                                data.ThanhTien = data.SoLuong != null ?
                                    resultData * data.SoLuong : resultData;
                            });
                    break;
                }
            }
            return;
        }
        data.DonGia = null;
        data.ThanhTien = null;
    }
    Reset() {
        this.dvTrongGois.DonGia = null;
        this.dvTrongGois.ThanhTien = null;
        this.dvTrongGois.MaDv = null;
        this.dvTrongGois.TenDv = null;
        this.dvTrongGois.Id = null;
        this.dvTrongGois.DvId = null;
        this.dvTrongGois.LoaiGia = 1;
        this.dvTrongGois.SoLuong = null;
        this.dvTrongGois.IdDatabase = null;
        this.dvTrongGois.GhiChu = null;
        this.dvTrongGois.Nhom = null;
        this.dvTrongGois.NhomDisplay = null;
        this.getLoaiGiaDefault();
    }

    Add() {

        switch (this.luaChonGoiDichVu) {
            case 1: {
                this.validationFormClientForKhamBenh(this.dvTrongGois);
                this.AddingAfterValidation(1);
                break;
            }
            case 2: {
                this.validationFormClientForKyThuat(this.dvTrongGois);
                this.AddingAfterValidation(2);
                break;
            }
            case 3: {
                this.validationFormClientForGiuong(this.dvTrongGois);
                this.AddingAfterValidation(3);
                break;
            }
        }
    }

    AddingAfterValidation(loaiNhom: number) {
        if (this.validationErrors && !this.validationErrors.some(x => x)) {
            this.dvTrongGois.Nhom = loaiNhom;
            this.apiService.get('GoiDichVuMarketing/GetResultEnumDichVuTongHop?enumTongHop=' + this.dvTrongGois.Nhom).subscribe(
                (resultData: any) => {
                    this.idDichVuKhamBenhComponent = this.goiDichVu.DvTrongGois.length + 1;

                    let goiDichVuModel = new DvTrongGoi();
                    goiDichVuModel = { ...this.dvTrongGois };
                    goiDichVuModel.IdDatabase = 0;
                    goiDichVuModel.Id = this.idDichVuKhamBenhComponent;
                    goiDichVuModel.NhomDisplay = resultData;
                    goiDichVuModel.GoiDichVuId = this.id ? this.id : 0;

                    this.goiDichVu.DvTrongGois.push(goiDichVuModel);
                    this.setDataGridView();
                    this.gridDvTrongGoi.gridDataSource = { ...this.gridDataSource };
                    this.gridDvTrongGoi.setDataSource();
                    this.Reset();
                }
            );
        }
    }

    setDataGridView() {
        this.gridDataSource = {
            data: [...this.goiDichVu.DvTrongGois],
            total: this.goiDichVu.DvTrongGois.length
        };
    }

    validationFormClientForKhamBenh(dataval: DvTrongGoi) {
        this.validationErrors = [];
        const array = [];
        if (dataval) {
            if (dataval.DvId === 0 || dataval.DvId == null) {
                array.push({ Field: 'DvId', Message: 'Yêu cầu chọn dịch vụ khám bệnh' });
            }

            if (dataval.LoaiGia === 0 || dataval.LoaiGia == null) {
                array.push({ Field: 'LoaiGiaThemDV', Message: 'Yêu cầu chọn loại giá' });
            }

            if (dataval.SoLuong === 0 || dataval.SoLuong == null) {
                array.push({ Field: 'SoLuong', Message: 'Yêu cầu chọn số lượng' });
            }

            // if (dataval.DonGia === 0) {
            //     array.push({ Field: 'DonGia', Message: 'Không có đơn giá. Chọn lại dịch vụ hoặc loại giá' });
            // }
        }

        if (this.checkExist(dataval.DvId, 1)) {
            array.push({ Field: 'DvId', Message: 'Dịch vụ khám bệnh này đã có trong danh sách' });
        }

        if (array.length > 0) { this.validationErrors = [...array]; }
    }

    validationFormClientForKyThuat(dataval: DvTrongGoi) {
        this.validationErrors = [];
        const array = [];
        if (dataval) {
            if (dataval.DvId === 0 || dataval.DvId == null) {
                array.push({ Field: 'DvId', Message: 'Yêu cầu chọn dịch vụ kỹ thuật' });
            }

            if (dataval.LoaiGia === 0 || dataval.LoaiGia == null) {
                array.push({ Field: 'LoaiGiaThemDV', Message: 'Yêu cầu chọn loại giá' });
            }

            if (dataval.SoLuong === 0 || dataval.SoLuong == null) {
                array.push({ Field: 'SoLuong', Message: 'Yêu cầu chọn số lượng' });
            }

            // if (dataval.DonGia === 0) {
            //     array.push({ Field: 'DonGia', Message: 'Không có đơn giá. Chọn lại dịch vụ hoặc loại giá' });
            // }
        }

        // check lai kỹ thuat
        if (this.checkExist(dataval.DvId, 2)) {
            array.push({ Field: 'DvId', Message: 'Dịch vụ kỹ thuật này đã có trong danh sách' });
        }

        if (array.length > 0) { this.validationErrors = [...array]; }
    }

    validationFormClientForGiuong(dataval: DvTrongGoi) {
        this.validationErrors = [];
        const array = [];
        if (dataval) {
            if (dataval.DvId === 0 || dataval.DvId == null) {
                array.push({ Field: 'DvId', Message: 'Yêu cầu chọn dịch vụ giường' });
            }

            if (dataval.LoaiGia === 0 || dataval.LoaiGia == null) {
                array.push({ Field: 'LoaiGiaThemDV', Message: 'Yêu cầu chọn loại giá' });
            }

            if (dataval.SoLuong === 0 || dataval.SoLuong == null) {
                array.push({ Field: 'SoLuong', Message: 'Yêu cầu chọn số lượng' });
            }
        }

        // check lai giuong benh
        if (this.checkExist(dataval.DvId, 3)) {
            array.push({ Field: 'DvId', Message: 'Dịch vụ giường này đã có trong danh sách' });
        }

        if (array.length > 0) { this.validationErrors = [...array]; }
    }

    checkExistOnKhamBenh(dichVuKhamBenhBenhVienId: number) {
        const len = this.goiDichVu.DvTrongGois.filter(x => x.Nhom === 1).length;

        for (let i = 0; i < len; i++) {
            if (this.goiDichVu.DvTrongGois[i].DvId === dichVuKhamBenhBenhVienId) {
                return true;
            }
        }

        return false;
    }

    checkExistOnAmendationForKhamBenh(dichVuKhamBenhBenhVienId: number, position: number) {
        const len = this.listDVKB.length;

        for (let i = 0; i < len; i++) {
            if (i === position) {
                continue;
            }
            if (this.listDVKB[i].DichVuKhamBenhBenhVienId === dichVuKhamBenhBenhVienId) {
                return true;
            }
        }

        return false;
    }


    checkExist(dichVuKhamBenhBenhVienId: number, loaiNhom: number) {
        return this.goiDichVu.DvTrongGois.some(x => x.Nhom === loaiNhom && x.DvId === dichVuKhamBenhBenhVienId);
    }

    ConfirmDelete(data: DvTrongGoi) {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: 'Xác nhận', Message: CommonService.format(SystemMessage.MessConfirm, ['xóa']) }
        }).afterClosed().subscribe(result => {
            if (result === 'Yes') {
                this.Delete(data);
            }
        });
    }

    Delete(data: DvTrongGoi) {
        this.goiDichVu.DvTrongGois.splice(this.goiDichVu.DvTrongGois.indexOf(data), 1);
        this.setDataGridView();
        this.gridDvTrongGoi.gridDataSource = { ...this.gridDataSource };
        this.gridDvTrongGoi.setDataSource();
    }

    ngAfterViewInit() {
        this.cdRef.detectChanges();
    }

    OnValidate() {
        this.validationErrors = [];
        if (this.goiDichVu.TenGoiDv == null || this.goiDichVu.TenGoiDv == "") {
            const validate = {
                Field: 'TenGoiDv',
                Message: "Tên nhóm yêu cầu nhập"
            };
            this.validationErrors.push(validate);
        }

        if (this.goiDichVu.IsDisabled == null) {
            const validate = {
                Field: 'IsDisabled',
                Message: GoiDv.SuDungNotNull
            };
            this.validationErrors.push(validate);
        }

        if (this.validationErrors && !this.validationErrors.some(x => x)) {
            if (this.goiDichVu.DvTrongGois && !this.goiDichVu.DvTrongGois.some(x => x)) {
                const validate = {
                    Field: 'dvTrongGoi',
                    Message: GoiDv.SoLuongNotNull
                };
                this.validationErrors.push(validate);
                this.notificationService.showError("Dịch vụ trong nhóm yêu cầu có ít nhất 1 dịch vụ");
            }

            if (this.goiDichVu.DvTrongGois.some(x => x.SoLuong == null || x.DonGia === 0)) {
                for (const dvTrongGoi of this.goiDichVu.DvTrongGois.filter(x => x.SoLuong == null)) {
                    const validate = {
                        Field: 'dataItem[' + this.goiDichVu.DvTrongGois.indexOf(dvTrongGoi) + '].SoLuong',
                        Message: GoiDv.SoLuongNotNull
                    };
                    this.validationErrors.push(validate);
                    this.goiDichVu.DvTrongGois.indexOf(dvTrongGoi);
                }

                // for (const dvTrongGoi of this.goiDichVu.DvTrongGois.filter(x => x.DonGia === 0)) {
                //     const validate = {
                //         Field: 'dataItem[' + this.goiDichVu.DvTrongGois.indexOf(dvTrongGoi) + '].DonGia',
                //         Message: 'Không có đơn giá. Chọn lại loại giá'
                //     };
                //     this.validationErrors.push(validate);
                //     this.goiDichVu.DvTrongGois.indexOf(dvTrongGoi);
                // }
            }
        }
    }
    onKeyAddDv(keyInput: any) {
        if (keyInput.keyCode === 13) {
            this.Add();
        }
    }

    ResetValidateFormForGrid() {
        if (this.validationErrors && this.validationErrors.some(x => x.Field.includes('DvId')
            || x.Field.includes('LoaiGia') || x.Field.includes('SoLuong') || x.Field.includes('DonGia'))) {
            for (const validationItem of this.validationErrors.filter(x => x.Field.includes('DvId')
                || x.Field.includes('LoaiGia') || x.Field.includes('SoLuong') || x.Field.includes('DonGia'))) {
                this.validationErrors.splice(this.validationErrors.indexOf(validationItem), 1);
            }
        }
    }
    openComboboxLoaiGiaKhamBenh(isOpen: boolean) {
        this.loaiGiaKhamBenhDisabled = isOpen;
    }
}
