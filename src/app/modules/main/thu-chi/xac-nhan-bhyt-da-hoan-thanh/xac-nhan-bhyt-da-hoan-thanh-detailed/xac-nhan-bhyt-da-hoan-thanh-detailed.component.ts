import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApiService } from 'src/app/core/services/api.service';
import { Router } from '@angular/router';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { ActivatedRoute } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { MatDialog } from '@angular/material';
import { ThongTinXacNhanBhyt } from '../xac-nhan-bhyt-da-hoan-thanh.model';
import { TabStripComponent } from '@progress/kendo-angular-layout';
import { HttpParams } from '@angular/common/http';
import { ViewImagePdfComponent } from 'src/app/shared/component/dialogs/view-image-pdf/view-image-pdf.component';
import { FormControl } from '@angular/forms';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ThongTinPhieuBHYTPdfPopupComponent } from '../../lich-su-xac-nhan-bhyt/thong-tin-phieu-linh-thuoc-pdf-popup/thong-tin-phieu-linh-thuoc-pdf-popup.component';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-xac-nhan-bhyt-da-hoan-thanh-detailed',
    templateUrl: './xac-nhan-bhyt-da-hoan-thanh-detailed.component.html',
    styleUrls: ['./xac-nhan-bhyt-da-hoan-thanh-detailed.component.scss']
})
export class XacNhanBhytDaHoanThanhDetailedComponent implements OnInit {
    documentType: DocumentType;
    gridColumns: any[] = [];
    id = this.route.snapshot.params.id;
    thongTinBaoHiemXaHoi: any;
    tabIndex = 0;
    yeuCauTiepNhanId : number;

    position = new FormControl('above');
    @ViewChild('tabBhyt', { static: true }) tabBhyt: TabStripComponent;
    thongTinXacNhanBhyt = {} as ThongTinXacNhanBhyt;
    @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
    tab = 1;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService,
        private notificationService: NotificationService,
        private dialog: MatDialog,
        private apiService: ApiService,
    ) { }

    ngOnInit() {
        const self = this;
        self.documentType = DocumentType.XacNhanBhytDaHoanThanh;
        self.showPopupLoadingData();
        if (self.id !== undefined && self.id !== null) {
            self.getById(self.id);
            this.yeuCauTiepNhanId = self.id;
        }
    }

    getById(id: number) {
        const self = this;
        if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
            this.apiService
                .post<any>('XacNhanBHYT/GetById?id=' + id)
                .subscribe((resultData: any) => {
                    if (resultData !== undefined && resultData != null) {
                        this.thongTinXacNhanBhyt = resultData;
                        this.thongTinXacNhanBhyt.MaBN = resultData.BenhNhan != null ? resultData.BenhNhan.MaBN : '';
                        this.thongTinXacNhanBhyt.DoiTuongUuDai = resultData.DoiTuongUuDai != null ? resultData.DoiTuongUuDai.Ten : '';
                        this.thongTinXacNhanBhyt.CongTyUuDai = resultData.CongTyUuDai != null ? resultData.CongTyUuDai.Ten : '';
                    }
                });
        } else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    showPopupLoadingData() {
        this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang tải dữ liệu...' }
        });
    }

    closePopupLoadingData() {
        this.dialog.closeAll();
    }

    switchDaXacNhan() {
        this.closePopupLoadingData();
    }

    onHuy() {
        this.router.navigate(['/xac-nhan-bhyt-da-hoan-thanh/ngoai-tru'], {
            queryParamsHandling: 'preserve',
        });
    }

    viewDocument(idFile: number, type: number) {
        const self = this;
        if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
            self.apiService
                .post('XacNhanBHYT/GetDocument?idFile=' + idFile + '&type=' + type)
                .subscribe((result: any) => {
                    if (result.MoTa === undefined) {
                        result.MoTa = null;
                    }
                    const params = new HttpParams({
                        fromObject: {
                            tenGuid: result.TenGuid,
                            duongDan: result.DuongDan,
                        },
                    });
                    if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
                        self.apiService
                            .get<any>('TaiLieuDinhKem/GetTaiLieuUrl', params)
                            .subscribe((resp) => {
                                if (resp) {
                                    if (
                                        result.TenGuid.indexOf('.pdf') !== -1 || result.TenGuid.indexOf('.PDF') !== -1
                                    ) {
                                        self.dialog.open(ViewImagePdfComponent, {
                                            disableClose: false,
                                            width: '1000px',
                                            height: '600px',
                                            data: {
                                                Type: 'PDF', Title: 'Xem tài liệu',
                                                Description: (result.MoTa !== null ? result.MoTa : ''), Src: resp
                                            }
                                        });
                                    } else {
                                        self.dialog.open(ViewImagePdfComponent, {
                                            disableClose: false,
                                            width: '1000px',
                                            height: '600px',
                                            data: {
                                                Type: 'Image', Title: 'Xem ảnh',
                                                Description: (result.MoTa !== null ? result.MoTa : ''), Src: resp
                                            }
                                        });
                                    }
                                }
                            });
                    } else {
                        self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
                    }
                });
        } else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    onTabSelect(ev: any) {
        const self = this;
        self.tabIndex = ev.index;
    }

    phieuLinhThuocBenhNhanBHYT() {
        let loading = this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: {},
        });
        let hostingName = window.location.protocol + '//' + window.location.host;
        this.apiService.post<String>("XacNhanBHYT/PhieuLinhThuocBenhNhanBHYTTheoYCTN?yeuCauTiepNhanId=" + this.yeuCauTiepNhanId + "&hostingName=" + hostingName).subscribe(
            arrHtml => {
                var arrHtmls = [{
                    Html: arrHtml,
                    TenFile: "PhieuLinhThuocBenhNhanBHYT",
                    PageSize: "A4",
                    PageOrientation: "Portrait",
                }];

                this.dialog
                    .open(ThongTinPhieuBHYTPdfPopupComponent, {
                        disableClose: false,
                        width: "1000px",
                        data: arrHtmls,
                    })
                    .afterClosed()
                    .subscribe(result => { loading.close() });
            },
            (err: ApiError) => {
                if (err.Message !== "Validation Failed") {
                    this.notificationService.showError(err.Message);
                    loading.close();
                }
            }
        );
    }

    @HostListener('document:keydown', ['$event'])
    keyEvent(event: KeyboardEvent) {
        // tslint:disable-next-line: deprecation
        if (event.keyCode === 112 && event.ctrlKey) {
            // ctrl + f1
            this.tabBhyt.selectTab(0);
            event.preventDefault();
        }

        // tslint:disable-next-line: deprecation
        if (event.keyCode === 113 && event.ctrlKey) {
            // ctrl + f2
            this.tabBhyt.selectTab(1);
            event.preventDefault();
        }

        // tslint:disable-next-line: deprecation
        if (event.keyCode === 27 && !event.ctrlKey) {
            // esc
            this.onHuy();
            event.preventDefault();
        }
    }
}
