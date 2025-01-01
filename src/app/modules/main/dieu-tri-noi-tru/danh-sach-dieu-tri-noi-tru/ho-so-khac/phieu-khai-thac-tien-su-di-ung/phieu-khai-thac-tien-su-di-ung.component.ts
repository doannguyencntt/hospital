import { ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild, Input, ViewRef, Output, EventEmitter } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';

import icAdd from '@iconify/icons-ic/twotone-add';
import icDelete from '@iconify/icons-ic/twotone-delete';
import { PhieuKhaiThacTienSuDiUng, NoiTruHoSoKhacPhieuKhaiThacTienSuDiUng, FileChuKyModel, ChiTietDieuTriNoiTruViewModel } from '../../../dieu-tri-noi-tru.model';
import icClear from '@iconify/icons-ic/twotone-clear';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { PhieuInKhaiThacTsbComponent } from './phieu-in-khai-thac-tsb/phieu-in-khai-thac-tsb.component';
import { ItemChange } from '@progress/kendo-angular-charts/dist/es2015/common/collection.service';
declare var $: any;
@Component({
    selector: 'app-phieu-khai-thac-tien-su-di-ung',
    templateUrl: './phieu-khai-thac-tien-su-di-ung.component.html',
    styleUrls: ['./phieu-khai-thac-tien-su-di-ung.component.scss']
})
export class PhieuKhaiThacTienSuDiUngComponent implements OnInit {
    phieuKhaiThacTienSuDiUng: PhieuKhaiThacTienSuDiUng;
    phieuKhaiThacTienSuDiUngList: PhieuKhaiThacTienSuDiUng[] = [];
    noiTruHoSoKhacPhieuKhaiThacTienSuDiUng: NoiTruHoSoKhacPhieuKhaiThacTienSuDiUng;
    documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
    validationErrors: any[] = [];

    gridDataSource: any = [];
    gridTienSuDiUng: any[] = [];
    data: any;
    dataDuocPham: any;
    icAdd = icAdd;
    icDelete = icDelete;
    icClear = icClear;
    tenTaiKhoanDangNhap: string = "";
    ngayThucHien: string = "";
    getNhanVienId: any;
    @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
    @Output() returnId: EventEmitter<any> = new EventEmitter<any>();
    allowedExtensions: string[] = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG', '.pdf', '.PDF'];
    @ViewChild('tenThuoc', { static: true }) tenThuoc: TemplateRef<any>;
    @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
    @ViewChild('diNguyenGayDiUngTemplate', { static: true }) diNguyenGayDiUngTemplate: TemplateRef<any>;
    @ViewChild('coKhongSoLanTemplate', { static: true }) coKhongSoLanTemplate: TemplateRef<any>;
    @ViewChild('bieuHienLamSangTemplate', { static: true }) bieuHienLamSangTemplate: TemplateRef<any>;
    @ViewChild('xuTriTemplate', { static: true }) xuTriTemplate: TemplateRef<any>;
    @Input() yeuCauTiepNhanId: number = 0;
    @ViewChild('GridPhieuKhaiThac', { read: GridComponent, static: false }) gridChild: GridComponent;
    constructor(private route: ActivatedRoute, private router: Router, private apiService: ApiService,
        private dialog: MatDialog,
        private notificationService: NotificationService,
        private authService: AuthService,
        private ref: ChangeDetectorRef,
    ) { }

    ngOnInit() {
        this.phieuKhaiThacTienSuDiUng = new PhieuKhaiThacTienSuDiUng();
        this.phieuKhaiThacTienSuDiUng.FileChuKy = new Array<FileChuKyModel>();
        this.phieuKhaiThacTienSuDiUngList = new Array<PhieuKhaiThacTienSuDiUng>();
        this.noiTruHoSoKhacPhieuKhaiThacTienSuDiUng = new NoiTruHoSoKhacPhieuKhaiThacTienSuDiUng();
        const id: number = this.dieuTriNoiTruModel.Id;
        this.yeuCauTiepNhanId = id;
        this.getNhanVienId = this.authService.getAccessUser();
        this.gridTienSuDiUng = [
            { Field: "", Title: "STT", Width: 15, Template: this.sttTemplate },
            { Field: "NoiDung", Title: "Nội dung", Width: 120 },
            { Field: "TenThuoc", Title: "Tên thuốc", Width: 80, Template: this.tenThuoc },
            { Field: "DiNguyenGayDiUng", Title: "Dị nguyên gây dị ứng", Width: 100, Template: this.diNguyenGayDiUngTemplate },
            { Field: "CoKhongLan", Title: "Có-không/Số lần", Width: 100, Template: this.coKhongSoLanTemplate },
            { Field: "BieuHienLamSang", Title: "Biểu hiện lâm sàng", Width: 80, Template: this.bieuHienLamSangTemplate },
            { Field: "XuTri", Title: "Xử trí", Width: 80, Template: this.xuTriTemplate }
        ];

        this.getDSDuocPhamQuocGia();
        this.getData();
    }
    getConFigUi() {
        var self = this;
        self.apiService.post<any>("DieuTriNoiTru/GetPhieuKhaiThacTienSuDiUngConfig").subscribe(
            (result) => {
                let dataTable = JSON.parse(result.Value);
                this.phieuKhaiThacTienSuDiUngList = dataTable;
                this.phieuKhaiThacTienSuDiUngList.forEach(e => {
                    var data: number = +e.STT;
                    e.Stt = data + 1;
                    e.SoLan = 0;
                });
                this.gridDataSource = {
                    data: dataTable,
                    total: dataTable.length
                };
            },
            (err: ApiError) => {
                self.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    self.notificationService.showError(err.Message);
                }
            });
    }
    getDSDuocPhamQuocGia() {
        this.apiService.post<any>("DieuTriNoiTru/GetChuToa").subscribe(
            (result) => {
                this.data = result;

            });
        this.apiService.post<any>("DieuTriNoiTru/GetDanhSachDuocPhamQuocGia").subscribe(
            (result) => {
                this.dataDuocPham = result;
            });
    }
    setDataGridView() {
        this.gridDataSource = {
            data: this.phieuKhaiThacTienSuDiUngList,
            total: this.phieuKhaiThacTienSuDiUngList.length
        };
        this.gridChild.gridDataSource = this.gridDataSource;
    }
    changeDsDuocPhamQuocGia(event: any, rowIndex: any) {
        this.phieuKhaiThacTienSuDiUngList.forEach(element => {
            if (element.STT == rowIndex) {
                element.TenThuoc = event;
                this.phieuKhaiThacTienSuDiUng = element;
                this.phieuKhaiThacTienSuDiUng.NgayThucHien = this.ngayThucHien;
                this.phieuKhaiThacTienSuDiUng.TaiKhoanDangNhap = this.tenTaiKhoanDangNhap;
            }
        });
    }
    modelChangeSoLan(event: any, rowIndex: any) {
        this.phieuKhaiThacTienSuDiUngList.forEach(element => {
            if (element.STT == rowIndex) {
                element.SoLan = event;
                this.phieuKhaiThacTienSuDiUng = element;
                this.phieuKhaiThacTienSuDiUng.NgayThucHien = this.ngayThucHien;
                this.phieuKhaiThacTienSuDiUng.TaiKhoanDangNhap = this.tenTaiKhoanDangNhap;
            }
        });
    }
    changeXuTri(event: any, rowIndex: any) {
        this.phieuKhaiThacTienSuDiUngList.forEach(element => {
            if (element.STT == rowIndex) {
                element.XuTri = event;
                this.phieuKhaiThacTienSuDiUng = element;
                this.phieuKhaiThacTienSuDiUng.NgayThucHien = this.ngayThucHien;
                this.phieuKhaiThacTienSuDiUng.TaiKhoanDangNhap = this.tenTaiKhoanDangNhap;
            }
        });


    }
    changeBieuHienLamSang(event: any, rowIndex: any) {
        this.phieuKhaiThacTienSuDiUngList.forEach(element => {
            if (element.STT == rowIndex) {
                element.BieuHienLamSang = event;
                this.phieuKhaiThacTienSuDiUng = element;
                this.phieuKhaiThacTienSuDiUng.NgayThucHien = this.ngayThucHien;
                this.phieuKhaiThacTienSuDiUng.TaiKhoanDangNhap = this.tenTaiKhoanDangNhap;
            }
        });


    }
    changeCoKhong(event: any, rowIndex: any) {
        this.phieuKhaiThacTienSuDiUngList.forEach(element => {
            if (element.STT == rowIndex) {
                element.CoKhong = event;
                this.phieuKhaiThacTienSuDiUng = element;
                this.phieuKhaiThacTienSuDiUng.NgayThucHien = this.ngayThucHien;
                this.phieuKhaiThacTienSuDiUng.TaiKhoanDangNhap = this.tenTaiKhoanDangNhap;
            }
        });

    }
    // changeDiNguyenGayDiUng(event: any, rowIndex: any) {
    //     this.phieuKhaiThacTienSuDiUngList.forEach(element => {
    //         if (element.STT == rowIndex) {
    //             element.DiNguyenGayDiUng = event;
    //             this.phieuKhaiThacTienSuDiUng = element;
    //         }
    //     });
    // }
    getTaiKhoanDangNhap() {
        var self = this;
        self.apiService.post<any>("DieuTriNoiTru/GetTenDangNhap").subscribe(
            (result) => {
                this.tenTaiKhoanDangNhap = result;
            },
            (err: ApiError) => {
                self.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    self.notificationService.showError(err.Message);
                }
            });
    }
    getData() {
        var self = this;
        // show cái cuối cùng
        self.apiService.post<any>("DieuTriNoiTru/GetThongTinPhieuKhaiThacTienSuBenh?yeuCauTiepNhanId=" + self.yeuCauTiepNhanId).subscribe(
            (result) => {
                if (result != null) {
                    let thongTinHoSo = JSON.parse(result.ThongTinHoSo);
                    self.phieuKhaiThacTienSuDiUng = thongTinHoSo;
                    self.phieuKhaiThacTienSuDiUng.FileChuKy = [...result.ListFile];
                    let phieuKhaiThacTienSuDiUngList = JSON.parse(thongTinHoSo.PhieuKhaiThacTienSuDiUngList);
                    this.phieuKhaiThacTienSuDiUngList = phieuKhaiThacTienSuDiUngList;
                    this.phieuKhaiThacTienSuDiUngList.forEach(e => {
                        var data: number = +e.STT;
                        e.Stt = data + 1;
                    });
                    self.noiTruHoSoKhacPhieuKhaiThacTienSuDiUng.Id = result.Id;
                    this.returnId.emit(this.noiTruHoSoKhacPhieuKhaiThacTienSuDiUng.Id);
                }
                else {
                    self.phieuKhaiThacTienSuDiUng = new PhieuKhaiThacTienSuDiUng();
                    this.getConFigUi();
                    let nhanVienThucHienId = self.getNhanVienId.Id;
                    self.apiService.post<any>("DieuTriNoiTru/GetTenNguoiThucHien?idNguoiLogin=" + self.getNhanVienId.Id + "&yeuCauTiepNhanId=" + self.yeuCauTiepNhanId).subscribe(
                        (result) => {

                            self.phieuKhaiThacTienSuDiUng.TaiKhoanDangNhap = result.TenNhanVien;
                            self.phieuKhaiThacTienSuDiUng.NgayThucHien = result.NgayThucHien;
                            self.tenTaiKhoanDangNhap = result.TenNhanVien;
                            self.ngayThucHien = result.NgayThucHien;
                            // self.trichBienBanHoiChan.DaDieuTriTuNgay = result.DaDieuTriTuNgay;
                            self.phieuKhaiThacTienSuDiUng.TaiSoGiuong = result.TaiSoGiuong;
                            self.phieuKhaiThacTienSuDiUng.Khoa = result.Khoa;
                            self.phieuKhaiThacTienSuDiUng.ChanDoan = result.ChanDoan
                        },
                        (err: ApiError) => {
                            self.validationErrors = err.ValidationErrors;
                            if (err.Message != "Validation Failed") {
                                self.notificationService.showError(err.Message);
                            }
                        });
                }
            },
            (err: ApiError) => {
                self.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    self.notificationService.showError(err.Message);
                }
            });
    }
    In() {
        var self = this;
        let dataIn = {
            Hosting: null,
            NoiTruHoSoKhacId: this.noiTruHoSoKhacPhieuKhaiThacTienSuDiUng.Id,
            YeuCauTiepNhanId: this.yeuCauTiepNhanId,
            LoaiHoSoDieuTriNoiTru: 2,
        }
        if (self.noiTruHoSoKhacPhieuKhaiThacTienSuDiUng.Id == 0 || dataIn.NoiTruHoSoKhacId == 0) {
            self.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: "500px",
                data: {
                    Title: "Xác nhận",
                    Message: "Bạn có in phiếu khai thác tiền sử bệnh này không ?",
                },
            }).afterClosed().subscribe((res) => {
                if (res == "Yes") {
                    self.phieuKhaiThacTienSuDiUng.PhieuKhaiThacTienSuDiUngList = JSON.stringify(self.phieuKhaiThacTienSuDiUngList);
                    const thongTinHoSo = JSON.stringify(self.phieuKhaiThacTienSuDiUng);
                    self.noiTruHoSoKhacPhieuKhaiThacTienSuDiUng.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
                    self.noiTruHoSoKhacPhieuKhaiThacTienSuDiUng.FileChuKy = self.phieuKhaiThacTienSuDiUng.FileChuKy;
                    self.noiTruHoSoKhacPhieuKhaiThacTienSuDiUng.LoaiHoSoDieuTriNoiTru = 2;
                    self.noiTruHoSoKhacPhieuKhaiThacTienSuDiUng.ThongTinHoSo = thongTinHoSo;
                    self.noiTruHoSoKhacPhieuKhaiThacTienSuDiUng.BacSiKhaiThac = self.phieuKhaiThacTienSuDiUng.BSKhaiThac;
                    self.apiService.post<any>("DieuTriNoiTru/LuuPhieuKhaiThacTienSuBenh", self.noiTruHoSoKhacPhieuKhaiThacTienSuDiUng).subscribe(
                        (result) => {
                            if (result != 0) {
                                dataIn.NoiTruHoSoKhacId = result.Id;
                                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                                self.Huy();
                                self.apiService.post<any>("DieuTriNoiTru/InPhieuKhaiThacTienSuBenh", dataIn).subscribe(
                                    (result) => {
                                        self.dialog.open(PhieuInKhaiThacTsbComponent, {
                                            disableClose: true,
                                            width: '1000px',
                                            data: { Model: result }
                                        }).afterClosed().subscribe(() => {
                                        });
                                    },
                                    (err: ApiError) => {
                                        self.validationErrors = err.ValidationErrors;
                                        if (err.Message != "Validation Failed") {
                                            self.notificationService.showError(err.Message);
                                        }
                                    });
                            }
                        },
                        (err: ApiError) => {
                            self.validationErrors = err.ValidationErrors;
                            if (err.Message != "Validation Failed") {
                                self.notificationService.showError(err.Message);
                            }
                        });
                }
            },
                (err: ApiError) => {
                    self.validationErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                        self.notificationService.showError(err.Message);
                    }
                });
        }
        else {
            self.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: "500px",
                data: {
                    Title: "Xác nhận",
                    Message: "Bạn có in phiếu khai thác tiền sử bệnh này không ?",
                },
            }).afterClosed().subscribe((res) => {
                if (res == "Yes") {
                    self.phieuKhaiThacTienSuDiUng.PhieuKhaiThacTienSuDiUngList = JSON.stringify(self.phieuKhaiThacTienSuDiUngList);
                    const thongTinHoSo = JSON.stringify(self.phieuKhaiThacTienSuDiUng);
                    self.noiTruHoSoKhacPhieuKhaiThacTienSuDiUng.Id = self.noiTruHoSoKhacPhieuKhaiThacTienSuDiUng.Id;
                    self.noiTruHoSoKhacPhieuKhaiThacTienSuDiUng.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
                    self.noiTruHoSoKhacPhieuKhaiThacTienSuDiUng.FileChuKy = self.phieuKhaiThacTienSuDiUng.FileChuKy;
                    self.noiTruHoSoKhacPhieuKhaiThacTienSuDiUng.LoaiHoSoDieuTriNoiTru = 2;
                    self.noiTruHoSoKhacPhieuKhaiThacTienSuDiUng.ThongTinHoSo = thongTinHoSo;
                    self.noiTruHoSoKhacPhieuKhaiThacTienSuDiUng.BacSiKhaiThac = self.phieuKhaiThacTienSuDiUng.BSKhaiThac;
                    self.apiService.post<any>("DieuTriNoiTru/LuuPhieuKhaiThacTienSuBenh", self.noiTruHoSoKhacPhieuKhaiThacTienSuDiUng).subscribe(
                        (result) => {
                            if (result != 0) {
                                dataIn.NoiTruHoSoKhacId = result;
                                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Cập nhật"]));
                                self.Huy();
                                self.apiService.post<any>("DieuTriNoiTru/InPhieuKhaiThacTienSuBenh", dataIn).subscribe(
                                    (result) => {
                                        self.dialog.open(PhieuInKhaiThacTsbComponent, {
                                            disableClose: true,
                                            width: '1000px',
                                            data: { Model: result }
                                        }).afterClosed().subscribe(() => {
                                        });
                                    },
                                    (err: ApiError) => {
                                        self.validationErrors = err.ValidationErrors;
                                        if (err.Message != "Validation Failed") {
                                            self.notificationService.showError(err.Message);
                                        }
                                    });
                            }
                        },
                        (err: ApiError) => {
                            self.validationErrors = err.ValidationErrors;
                            if (err.Message != "Validation Failed") {
                                self.notificationService.showError(err.Message);
                            }
                        });
                    // self.apiService.post<any>("DieuTriNoiTru/InPhieuKhaiThacTienSuBenh", dataIn).subscribe(
                    //     (result) => {
                    //         self.dialog.open(PhieuInKhaiThacTsbComponent, {
                    //             disableClose: true,
                    //             width: '1000px',
                    //             data: { Model: result }
                    //         }).afterClosed().subscribe(() => {
                    //         });
                    //     },
                    //     (err: ApiError) => {
                    //         self.validationErrors = err.ValidationErrors;
                    //         if (err.Message != "Validation Failed") {
                    //             self.notificationService.showError(err.Message);
                    //         }
                    //     });
                } 
            },
                (err: ApiError) => {
                    self.validationErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                        self.notificationService.showError(err.Message);
                    }
                });
        }
    }
    Huy() {
        var self = this;
        // show cái cuối cùng
        self.apiService.post<any>("DieuTriNoiTru/GetThongTinPhieuKhaiThacTienSuBenh?yeuCauTiepNhanId=" + self.yeuCauTiepNhanId).subscribe(
            (result) => {
                if (result != null) {
                    let thongTinHoSo = JSON.parse(result.ThongTinHoSo);
                    self.phieuKhaiThacTienSuDiUng = thongTinHoSo;
                    self.phieuKhaiThacTienSuDiUng.FileChuKy = [...result.ListFile];
                    let phieuKhaiThacTienSuDiUngList = JSON.parse(thongTinHoSo.PhieuKhaiThacTienSuDiUngList);
                    this.phieuKhaiThacTienSuDiUngList = phieuKhaiThacTienSuDiUngList;

                    this.phieuKhaiThacTienSuDiUngList.forEach(e => {
                        var data: number = +e.STT;
                        e.Stt = data + 1;
                    });
                    self.noiTruHoSoKhacPhieuKhaiThacTienSuDiUng.Id = result.Id;
                    this.returnId.emit(this.noiTruHoSoKhacPhieuKhaiThacTienSuDiUng.Id);
                }
            },
            (err: ApiError) => {
                self.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    self.notificationService.showError(err.Message);
                }
            });
    }
    Luu() {
        var self = this;
        this.phieuKhaiThacTienSuDiUng.PhieuKhaiThacTienSuDiUngList = JSON.stringify(this.phieuKhaiThacTienSuDiUngList);
        const thongTinHoSo = JSON.stringify(this.phieuKhaiThacTienSuDiUng);
        this.noiTruHoSoKhacPhieuKhaiThacTienSuDiUng.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
        self.noiTruHoSoKhacPhieuKhaiThacTienSuDiUng.FileChuKy = self.phieuKhaiThacTienSuDiUng.FileChuKy;
        this.noiTruHoSoKhacPhieuKhaiThacTienSuDiUng.LoaiHoSoDieuTriNoiTru = 2;
        this.noiTruHoSoKhacPhieuKhaiThacTienSuDiUng.ThongTinHoSo = thongTinHoSo;
        self.noiTruHoSoKhacPhieuKhaiThacTienSuDiUng.BacSiKhaiThac = self.phieuKhaiThacTienSuDiUng.BSKhaiThac;
        self.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: "500px",
            data: {
                Title: "Xác nhận",
                Message: "Bạn có muốn lưu lại phiếu khai thác tiền sử bệnh này không ?",
            },
        }).afterClosed().subscribe((res) => {
            if (res == "Yes") {

                self.apiService.post<any>("DieuTriNoiTru/LuuPhieuKhaiThacTienSuBenh", self.noiTruHoSoKhacPhieuKhaiThacTienSuDiUng).subscribe(
                    (result) => {
                        self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                        self.Huy();
                    },
                    (err: ApiError) => {
                        self.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            self.notificationService.showError(err.Message);
                        }
                    });
            } 
        },
            (err: ApiError) => {
                self.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    self.notificationService.showError(err.Message);
                }
            });
    }
    ChonCoKhong(event : any, item: any){
       if(event == false)
       {
         item.SoLan = 0 ;
       }
    }
}
