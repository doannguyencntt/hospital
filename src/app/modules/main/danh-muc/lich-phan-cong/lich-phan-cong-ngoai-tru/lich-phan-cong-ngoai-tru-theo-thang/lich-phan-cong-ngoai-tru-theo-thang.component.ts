import { Component, OnInit, } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { LichPhanCongNgoaiTru } from '../lich-phan-cong-ngoai-tru.model';
import icChevronLeft from '@iconify/icons-ic/twotone-chevron-left';
import icChevronRight from '@iconify/icons-ic/twotone-chevron-right';
import { addDays, weekInYear, firstDayInWeek, Day, addMonths } from '@progress/kendo-date-math';
import { IntlService } from '@progress/kendo-angular-intl';
import { GroupDescriptor, process } from '@progress/kendo-data-query';
import { AuthService } from 'src/app/core/services/auth.service';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { Router } from '@angular/router';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-lich-phan-cong-ngoai-tru-theo-thang',
    templateUrl: './lich-phan-cong-ngoai-tru-theo-thang.component.html',
    styleUrls: ['./lich-phan-cong-ngoai-tru-theo-thang.component.scss']
})
export class LichPhanCongNgoaiTruTheoThangComponent implements OnInit {
    constructor(
        public intl: IntlService,
        private apiService: ApiService,
        private router: Router,
        private authService: AuthService,
        private notificationService: NotificationService
    ) { }
    listKhoaPhongXepLich: Array<any>;
    lichPhanCong: LichPhanCongNgoaiTru;
    groups: GroupDescriptor[] = null;
    idKhoaPhong = 0;
    documentType: DocumentType;
    gridDataSource: any;
    icChevronLeft = icChevronLeft;
    icChevronRight = icChevronRight;
    dateLinkValue: Date = new Date();
    dateLinkText = '';
    monthLinkValue: Date = new Date();
    monthLinkText = '';
    weeks: any[] = [];

    ngOnInit() {
        this.listKhoaPhongXepLich = new Array<any>();
        this.lichPhanCong = new LichPhanCongNgoaiTru();
        this.documentType = DocumentType.DanhMucLichPhanCongNgoaiTru;
        this.getDataTuanAsync(this.dateLinkValue);

        this.getListKhoaPhongXepLich(this.dateLinkValue, 0);
        this.lichPhanCong.khoaPhongId = 0;
        this.idKhoaPhong = this.lichPhanCong.khoaPhongId;
        this.dateLinkText = this.formatDateLink(this.dateLinkValue);
        this.monthLinkText = this.formatMonthLink(this.monthLinkValue);
    }

    getDataTuanAsync(date: Date) {
        var dateRequest = this.intl.formatDate(date, "yyyy-MM-dd");
        this.apiService.post("LichPhanCongNgoaiTru/GetDataTuanAsync?date=" + dateRequest).subscribe(
            (resultData: any) => {
                if (resultData != undefined && resultData != null) {
                    if (this.groups != null) {
                        var d = process(resultData.Data, { group: this.groups });
                        if (d != null) {
                            d.total = resultData.TotalRowCount;
                            this.gridDataSource = d;
                        }
                        else {
                            this.gridDataSource = {
                                data: resultData,
                                total: resultData.TotalRowCount
                            };
                            this.getDataTuan();
                        }
                    }
                    else {
                        this.gridDataSource = {
                            data: resultData,
                            total: resultData.TotalRowCount
                        };
                        this.getDataTuan();
                    }
                }
            },
            () => {
            });
    }

    getListKhoaPhongXepLich(date: Date, khoaId: number) {
        var dateRequest = this.intl.formatDate(date, "yyyy-MM-dd");
        this.apiService.post("LichPhanCongNgoaiTru/GetListKhoaPhongXepLich?date=" + dateRequest + "&&khoaId=" + khoaId)
            .subscribe(
                (resultData: any) => {
                    if (resultData != undefined && resultData != null) {
                        this.listKhoaPhongXepLich = resultData;
                    }
                },
                () => {
                });
    }

    formatDateLink(date: Date) {
        return "Tháng <strong>" + (date.getMonth() + 1) + "/" + date.getFullYear() + "</strong> - Tuần <strong>" +
            weekInYear(date) + "</strong> (<strong>" + this.intl.formatDate(firstDayInWeek(date, Day.Monday), "dd/MM/yyyy") +
            "</strong> - <strong>" + this.intl.formatDate(addDays(firstDayInWeek(date, Day.Monday), 6), "dd/MM/yyyy") + "</strong>)";
    }

    changeMonthLink(event: any) {
        this.monthLinkValue = event;
        this.monthLinkText = this.formatMonthLink(event);
        this.getDataTuanAsync(this.monthLinkValue);
        this.getListKhoaPhongXepLich(this.monthLinkValue, this.idKhoaPhong);
    }

    onSelectKhoaPhong(event: any) {
        if (event !== undefined) {
            this.idKhoaPhong = event.KeyId;
            this.getListKhoaPhongXepLich(this.monthLinkValue, this.idKhoaPhong);
        } else {
            this.idKhoaPhong = 0;
            this.getListKhoaPhongXepLich(this.monthLinkValue, 0);
        }
    }

    prevMonthLink() {
        this.monthLinkValue = addMonths(this.monthLinkValue, -1);
        this.monthLinkText = this.formatMonthLink(this.monthLinkValue);
        this.getDataTuanAsync(this.monthLinkValue);
        this.getListKhoaPhongXepLich(this.monthLinkValue, this.idKhoaPhong);
    }
    nextMonthLink() {
        this.monthLinkValue = addMonths(this.monthLinkValue, 1);
        this.monthLinkText = this.formatMonthLink(this.monthLinkValue);
        this.getDataTuanAsync(this.monthLinkValue);
        this.getListKhoaPhongXepLich(this.monthLinkValue, this.idKhoaPhong);
    }
    formatMonthLink(date: Date) {

        return "Tháng <strong>" + (date.getMonth() + 1) + "/" + date.getFullYear();
    }

    getDataTuan() {
        this.weeks = this.gridDataSource.data;
    }

    xepLich(type: number, item: any) {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Add)) {
            if (type === 1) {
                this.router.navigate(["danh-muc/lich-phan-cong/ngoai-tru/xep-lich/" + item.IdKhoa + "/" + item.NgayStartTuan1.slice(0, 10)]);
            }

            if (type === 2) {
                this.router.navigate(["danh-muc/lich-phan-cong/ngoai-tru/xep-lich/" + item.IdKhoa + "/" + item.NgayStartTuan2.slice(0, 10)]);
            }

            if (type === 3) {
                this.router.navigate(["danh-muc/lich-phan-cong/ngoai-tru/xep-lich/" + item.IdKhoa + "/" + item.NgayStartTuan3.slice(0, 10)]);
            }

            if (type === 4) {
                this.router.navigate(["danh-muc/lich-phan-cong/ngoai-tru/xep-lich/" + item.IdKhoa + "/" + item.NgayStartTuan4.slice(0, 10)]);
            }

            if (type === 5) {
                this.router.navigate(["danh-muc/lich-phan-cong/ngoai-tru/xep-lich/" + item.IdKhoa + "/" + item.NgayStartTuan5.slice(0, 10)]);
            }

            if (type === 6) {
                this.router.navigate(["danh-muc/lich-phan-cong/ngoai-tru/xep-lich/" + item.IdKhoa + "/" + item.NgayStartTuan6.slice(0, 10)]);
            }
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }
    xemChiTietLich(type: number, item: any) {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Add)) {
            if (type === 1) {
                this.router.navigate(["danh-muc/lich-phan-cong/ngoai-tru/xep-lich/" + item.IdKhoa + "/" + item.NgayStartTuan1.slice(0, 10)]);
            }

            if (type === 2) {
                this.router.navigate(["danh-muc/lich-phan-cong/ngoai-tru/xep-lich/" + item.IdKhoa + "/" + item.NgayStartTuan2.slice(0, 10)]);
            }

            if (type === 3) {
                this.router.navigate(["danh-muc/lich-phan-cong/ngoai-tru/xep-lich/" + item.IdKhoa + "/" + item.NgayStartTuan3.slice(0, 10)]);
            }

            if (type === 4) {
                this.router.navigate(["danh-muc/lich-phan-cong/ngoai-tru/xep-lich/" + item.IdKhoa + "/" + item.NgayStartTuan4.slice(0, 10)]);
            }

            if (type === 5) {
                this.router.navigate(["danh-muc/lich-phan-cong/ngoai-tru/xep-lich/" + item.IdKhoa + "/" + item.NgayStartTuan5.slice(0, 10)]);
            }

            if (type === 6) {
                this.router.navigate(["danh-muc/lich-phan-cong/ngoai-tru/xep-lich/" + item.IdKhoa + "/" + item.NgayStartTuan6.slice(0, 10)]);
            }
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }
}
