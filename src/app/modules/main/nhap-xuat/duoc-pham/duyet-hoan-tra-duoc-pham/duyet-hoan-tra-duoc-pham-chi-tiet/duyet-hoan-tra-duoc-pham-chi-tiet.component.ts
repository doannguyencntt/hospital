import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ThongTinDuyetHoanTraDuocPham, TuChoiDuyetHoanTraDuocPham } from '../duyet-hoan-tra-duoc-pham.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { HoanTraDuocPhamVatTuMessage, SystemMessage } from 'src/app/shared/configdata/system-message';
import { TuChoiDuyetHoanTraDuocPhamComponent } from '../tu-choi-duyet-hoan-tra-duoc-pham/tu-choi-duyet-hoan-tra-duoc-pham.component';
import { InPhieuHoanTraCompoment } from '../in-phieu-hoan-tra/in-phieu-hoan-tra.component';

@Component({
    selector: 'app-duyet-hoan-tra-duoc-pham-chi-tiet',
    templateUrl: './duyet-hoan-tra-duoc-pham-chi-tiet.component.html',
    styleUrls: ['./duyet-hoan-tra-duoc-pham-chi-tiet.component.scss']
})
export class DuyetHoanTraDuocPhamChiTietComponent implements OnInit {
    documentType: DocumentType = DocumentType.DuyetYeuCauHoanTraDuocPham;
    yeuCauHoanTraDuocPhamId: number = 0;
    thongTinDuyetHoanTraDuocPham = new ThongTinDuyetHoanTraDuocPham();
    tuChoiDuyetHoanTraDuocPham = new TuChoiDuyetHoanTraDuocPham();
    isLoading: any;
    validationErrors: any;

    currentAccessUser: any;
    idPhong: any;
    currentUserInformation: any;

    urlGetDataAsync: string = "HoanTra/GetDanhSachDuyetHoanTraDuocPhamChiTietForGridAsync";
    urlGetTotalPageGridChild: string = "HoanTra/GetTotalDanhSachDuyetHoanTraDuocPhamChiTietForGridAsync";

    gridColumns: any[] = [];
    sortDuyetKhoChild: SortDescriptor[] = [{ field: "Id", dir: "asc" }]
    public groups: GroupDescriptor[] = [{
        field: 'Nhom', dir: 'asc', aggregates: []
    }];

    @ViewChild('TinhTrangBHYTTemplate', { static: true }) TinhTrangBHYTTemplate: TemplateRef<any>;
    @ViewChild('hsdTemplate', { static: true }) hsdTemplate: TemplateRef<any>;
    @ViewChild('soLuongHoanTraTemplate', { static: true }) soLuongHoanTraTemplate: TemplateRef<any>;
    @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;

    constructor(private dialog: MatDialog, private elem: ElementRef, private router: Router, private route: ActivatedRoute,
        private authService: AuthService, private notificationService: NotificationService, private apiService: ApiService) { }

    ngOnInit() {
        this.yeuCauHoanTraDuocPhamId = this.route.snapshot.params.id;

        if (this.yeuCauHoanTraDuocPhamId) {
            this.currentAccessUser = this.authService.getAccessUser();
            this.idPhong = this.authService.getPhongLamViecId();

            this.getCurrentUserInformation();
        } else {
            return;
        }

        this.gridColumns = [
            { Field: "Nhom", Title: "", Width: 100, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: "Ma", Title: "Mã", Width: 100 },
            { Field: "DuocPham", Title: "Tên Dược Phẩm", Width: 100 },
            { Field: "DonViTinh", Title: "ĐVT", Width: 100 },
            { Field: "LoaiBHYT", Title: "Loại BHYT", Width: 140, Template: this.TinhTrangBHYTTemplate },
            { Field: "SoLo", Title: "Số Lô", Width: 100 },
            { Field: "HanSuDung", Title: "Hạn Sử Dụng", Width: 140, Template: this.hsdTemplate },
            { Field: "SoLuongHoanTra", Title: "SL H.Trả", Width: 100, Template: this.soLuongHoanTraTemplate },
        ];
    }

    getCurrentUserInformation() {
        if (this.currentAccessUser) {
            this.apiService.post("User/GetUserAndDepartmentInformation?idNhanVien=" + this.currentAccessUser.Id + "&idPhongBenhVien=" + this.idPhong).subscribe((res: any) => {
                this.currentUserInformation = res;
                this.getThongTinDuyetKhoDuocPham(this.yeuCauHoanTraDuocPhamId);
            });
        }
    }

    getThongTinDuyetKhoDuocPham(id: number) {
        this.apiService.get<any>("HoanTra/GetThongTinDuyetHoanTraDuocPham/" + id).subscribe(res => {
            if (res) {
                this.thongTinDuyetHoanTraDuocPham = res;

                if (this.thongTinDuyetHoanTraDuocPham.ClassTrangThai === 'dang_cho_duyet') {
                    this.thongTinDuyetHoanTraDuocPham.TenNhanVienNhan = this.thongTinDuyetHoanTraDuocPham.TenNhanVienYeuCau;
                    this.thongTinDuyetHoanTraDuocPham.NhanVienNhanId = this.thongTinDuyetHoanTraDuocPham.NhanVienYeuCauId;

                    this.thongTinDuyetHoanTraDuocPham.TenNhanVienTra = this.currentUserInformation.Ten;
                    this.thongTinDuyetHoanTraDuocPham.NhanVienTraId = this.currentAccessUser.Id;
                }
            }
        }, err => {
            this.notificationService.showError(err.Message);
        });
    }

    BackToList() {
        this.router.navigateByUrl("/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham?holdQuery=true");
    }

    duyet() {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            if (this.isLoading != null) {
                this.dialog.closeAll();
                this.isLoading = null;
            }

            this.isLoading = this.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: "400px",
                data: {
                    Title: "Xác nhận",
                    Message: HoanTraDuocPhamVatTuMessage.MessageXacNhanDuyetHoanTraDuocPham
                },
            })
                .afterClosed()
                .subscribe((result) => {
                    /* result is a string:Yes,No,No answer*/
                    if (result == "Yes") {
                        this.validationErrors = null;
                        this.thongTinDuyetHoanTraDuocPham.Id = this.yeuCauHoanTraDuocPhamId;
                        this.thongTinDuyetHoanTraDuocPham.NhanVienTraId = this.thongTinDuyetHoanTraDuocPham.NhanVienTraId ? this.thongTinDuyetHoanTraDuocPham.NhanVienTraId : 0;
                        this.thongTinDuyetHoanTraDuocPham.NhanVienNhanId = this.thongTinDuyetHoanTraDuocPham.NhanVienNhanId ? this.thongTinDuyetHoanTraDuocPham.NhanVienNhanId : 0;
                        this.apiService.post<any>("HoanTra/DuyetHoanTraDuocPham", this.thongTinDuyetHoanTraDuocPham).subscribe(res => {
                            this.notificationService.showSuccess("Duyệt thành công.");

                            // let yeuCauHoanTraDuocPhamId = this.yeuCauHoanTraDuocPhamId;
                            this.dialog.open(InPhieuHoanTraCompoment, {
                                disableClose: true,
                                width: "1200px",
                                data: { Title: "PHIẾU TRẢ THUỐC/ VẬT TƯ Y TẾ", YeuCauHoanTraDuocPhamVatTuId: this.yeuCauHoanTraDuocPhamId, LaDuocPham: true, LaTuTruc: true, DuocDuyet: true },
                            }).afterClosed().subscribe((result) => {
                                this.BackToList();
                            });

                        }, err => {
                            // this.notificationService.showError(err);
                            err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
                        });
                    }
                });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    khongPheDuyet() {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            if (this.isLoading != null) {
                this.dialog.closeAll();
                this.isLoading = null;
            }

            this.isLoading = this.dialog.open(TuChoiDuyetHoanTraDuocPhamComponent, {
                disableClose: true,
                width: "400px",
                height: "300px",
            }).afterClosed().subscribe((result) => {
                if (result) {
                    this.tuChoiDuyetHoanTraDuocPham.LyDoHuy = result;
                    this.tuChoiDuyetHoanTraDuocPham.Id = this.yeuCauHoanTraDuocPhamId;
                    this.apiService.post<any>("HoanTra/TuChoiDuyetHoanTraDuocPham", this.tuChoiDuyetHoanTraDuocPham).subscribe(res => {
                        this.notificationService.showSuccess("Từ chối duyệt thành công.");
                        this.BackToList();
                    }, err => {
                        err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
                    });
                }
            });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    InPhieuHoanTra() {
        this.dialog.open(InPhieuHoanTraCompoment, {
            disableClose: true,
            width: "1200px",
            data: { Title: "PHIẾU TRẢ THUỐC/ VẬT TƯ Y TẾ", YeuCauHoanTraDuocPhamVatTuId: this.yeuCauHoanTraDuocPhamId, LaDuocPham: true, LaTuTruc: true , DuocDuyet: true },
        }).afterClosed().subscribe((result) => { });
    }
}