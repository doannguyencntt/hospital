import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { SortDescriptor } from '@progress/kendo-data-query';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { LoaiBenhAn } from 'src/app/shared/enum/dieu-tri-noi-tru.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ChiTietDieuTriNoiTruViewModel, DieuTriNoiTruThongTinHanhChinh } from '../../dieu-tri-noi-tru.model';
import { TiepNhanNoiTruThongTinDoiTuongPopupComponent } from '../../tiep-nhan-noi-tru/tiep-nhan-noi-tru-thong-tin-doi-tuong-popup/tiep-nhan-noi-tru-thong-tin-doi-tuong-popup.component';

@Component({
    selector: 'app-thong-tin-hanh-chinh',
    templateUrl: './thong-tin-hanh-chinh.component.html',
    styleUrls: ['./thong-tin-hanh-chinh.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class ThongTinHanhChinhComponent implements OnInit {
    documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
    validationErrors: any[] = [];

    yeuCauTiepNhanId: number = null;
    loaiBenhAn: number = 0;
    thongTinHanhChinh: DieuTriNoiTruThongTinHanhChinh = new DieuTriNoiTruThongTinHanhChinh();

    gridColumns: any[] = [];
    sortDanhSachChuyenKhoa: SortDescriptor[] = [ { field: "ThoiDiemVaoKhoa", dir: "desc" }]

    urlGetDanhSachNhomMau = `DieuTriNoiTru/GetListNhomMau`;
    urlGetDanhSachYeuToRh = `DieuTriNoiTru/GetListYeuToRh`;

    urlGetDanhSachChuyenKhoaForGrid = `DieuTriNoiTru/GetDanhSachChuyenKhoaForGrid`;
	urlGetTotalPagesDanhSachChuyenKhoaForGrid = `DieuTriNoiTru/GetTotalPagesDanhSachChuyenKhoaForGrid`;

    @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
    @Output() outputThongTinBenhNhanChanged = new EventEmitter();
    @ViewChild('denKhoaTemplate', { static: true }) denKhoaTemplate: TemplateRef<any>;
    @ViewChild('thoiGianBatDauTemplate', { static: true }) thoiGianBatDauTemplate: TemplateRef<any>;
    @ViewChild('thoiGianKetThucTemplate', { static: true }) thoiGianKetThucTemplate: TemplateRef<any>;

    constructor(private route: ActivatedRoute, private dialog: MatDialog, 
                private authService: AuthService, private apiService: ApiService, private notificationService: NotificationService) { }

    ngOnInit() {
        this.yeuCauTiepNhanId = this.dieuTriNoiTruModel.Id; 
        this.getThongTinYeuCauTiepNhan();
        this.getThongTinLoaiBenhAn();

        this.gridColumns = [
            { Field: "KhoaPhongChuyenDenId", Title: "Khoa điều trị", Width: 150, Sortable: false, Template: this.denKhoaTemplate },
            { Field: "ThoiDiemVaoKhoa", Title: "Thời gian vào khoa", Width: 150, Sortable: false, Template: this.thoiGianBatDauTemplate },
            { Field: "ThoiDiemRaKhoa", Title: "Thời gian ra khoa", Width: 150, Sortable: false, Template: this.thoiGianKetThucTemplate }
        ];
    }

    getThongTinYeuCauTiepNhan() {
        if (this.yeuCauTiepNhanId) {
            this.apiService.get(`DieuTriNoiTru/GetThongTinHanhChinh?yeuCauTiepNhanId=${this.yeuCauTiepNhanId}`).subscribe((res: any) => {
                this.thongTinHanhChinh = res;
            }, (err: ApiError) => {
                err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
            });
        }
    }

    getThongTinLoaiBenhAn() {
        this.apiService.get<any>(`DieuTriNoiTru/GetThongTinLoaiBenhAn/${this.yeuCauTiepNhanId}`).subscribe((res) => {
            this.loaiBenhAn = res;
        });
    }

    capNhatDoiTuong() {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.dialog.open(TiepNhanNoiTruThongTinDoiTuongPopupComponent, {
                disableClose: false,
                width: '1600px',
                data: { 
                    "YeuCauTiepNhanId": this.yeuCauTiepNhanId, 
                    "IsBenhAnNhiKhoa": this.loaiBenhAn == LoaiBenhAn.NhiKhoa,
                    "IsBenhAnSoSinh": this.loaiBenhAn == LoaiBenhAn.TreSoSinh
                }
            }).afterClosed().subscribe(res => {
                if(res) {
                    this.getThongTinYeuCauTiepNhan();
                    this.outputThongTinBenhNhanChanged.emit(true)
                }
            });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    luuThongTinHanhChinh() {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: '400px',
                data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["chỉnh sửa"]) }
            }).afterClosed().subscribe(result => {
                if (result === 'Yes') {
                    this.apiService.post(`DieuTriNoiTru/CapNhatThongTinHanhChinh`, this.thongTinHanhChinh).subscribe((res: any) => {
                        this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Chỉnh sửa"]));
                        this.getThongTinYeuCauTiepNhan();
                    }, (err: ApiError) => {
                        err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
                    });
                }
            });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }
}
